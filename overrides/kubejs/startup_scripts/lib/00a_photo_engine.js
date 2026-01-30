// 00_engine.js
console.info("[PhotoEngine] Loaded.");

global.Photo = global.Photo || { quests: [] };
const Photo = global.Photo

Photo.DEBUG = true;
Photo.log = function (msg) {
  if (Photo.DEBUG) console.info(msg);
};

// --- What the Camera do ---
Photo.parseCameraData = function (dataObj) {
  var comps = dataObj.components || (dataObj.tag && dataObj.tag.components);
  if (!comps) return [];
  var film = comps["exposure:camera_film"];
  if (!film) return [];
  var framesArr = film.components && film.components["exposure:film_frames"];
  if (!Array.isArray(framesArr)) return [];

  var typeKey = film.id.replace(/^exposure:|_film$/g, "");
  var isColor = typeKey !== "black_and_white";
  var count = Math.min(framesArr.length, 16);
  var out = [];

  for (var i = 0; i < count; i++) {
    var f = framesArr[i];
    var extra = f.extra_data || {};
    var counts = {};
    var pokemonCounts = {};

    // per-photo id
    var frameId =
      f.identifier ||
      (extra.timestamp != null ? String(extra.timestamp) : null);

    (f.entities_in_frame || []).forEach(function (e) {
      counts[e.id] = (counts[e.id] || 0) + 1;

      if (e.id === "cobblemon:pokemon") {
        // flexible name extraction (because e.name isn't guaranteed)
        var n = e.name || e.entity_name || e.displayName || (e.pokemon && e.pokemon.name);
        if (n) {
          var key = String(n).toLowerCase();
          pokemonCounts[key] = (pokemonCounts[key] || 0) + 1;
        } else {
          // Optional debug: uncomment if needed
          Photo.log("[PhotoDebug] pokemon entity had no name fields: " + JSON.stringify(e));
        }
      }
    });

    var entities = Object.keys(counts).map(function (id) {
      return { id: id, count: counts[id] };
    });

    out.push({
      frameId: frameId, // ✅ NEW
      weather: extra.weather || null,
      timeOfDay: extra.day_time != null ? extra.day_time : null,
      dimension: extra.dimension || null,
      biome: extra.biome || null,
      structures: Array.isArray(extra.structures) ? extra.structures.slice() : [],
      entities: entities,
      pokemonCounts: pokemonCounts,
      filmType: typeKey,
      isColor: isColor,
    });
  }

  return out;
};


// --- match helpers ---
function matchesFilmType(frame, quest) {
  if (!quest.type) return true;
  if (quest.type === "color") return frame.isColor;
  if (quest.type === "black_and_white") return !frame.isColor;
  return true;
}

function matchesStructures(frame, quest) {
  if (!quest.structures) return true;
  return quest.structures.every((s) => frame.structures.includes(s));
}

function matchesEntityCounts(frame, entityId, minCount) {
  var e = frame.entities.find((x) => x.id === entityId);
  if (!e) return false;
  if (minCount != null && e.count < minCount) return false;
  return true;
}

function matchesPokemonCounts(frame, pokemonName, minCount) {
  var key = String(pokemonName).toLowerCase();
  var count = frame.pokemonCounts && frame.pokemonCounts[key];
  if (!count) return false;
  if (minCount != null && count < minCount) return false;
  return true;
}

function matchesBothEntities(frame, ids) {
  return ids.every((id) => frame.entities.some((e) => e.id === id));
}

function matchesEntityPrefix(frame, prefix) {
  return frame.entities.some((e) => e.id.startsWith(prefix));
}

function matchesTimeWindows(frame, windows) {
  if (!windows) return true;
  var t = frame.timeOfDay;
  if (t == null) return false;
  t = Math.floor(t % 24000);
  return windows.some(function (w) {
    return w.from <= w.to ? t >= w.from && t < w.to : t >= w.from || t < w.to;
  });
}

// EXACT biome match only (tags later)
function matchesBiome(frame, questBiome) {
  if (!questBiome) return true;
  return String(frame.biome) === String(questBiome);
}

Photo.frameMatches = function (frame, quest) {
  if (quest.dimension && frame.dimension !== quest.dimension) return false;
  if (!matchesBiome(frame, quest.biome)) return false;
  if (quest.weather && frame.weather !== quest.weather) return false;
  if (!matchesFilmType(frame, quest)) return false;
  if (!matchesStructures(frame, quest)) return false;
  if (!matchesTimeWindows(frame, quest.timeWindows)) return false;

  if (quest.entity) {
    if (!matchesEntityCounts(frame, quest.entity, quest.minCount)) return false;
  }
  if (quest.pokemon) {
    if (!matchesPokemonCounts(frame, quest.pokemon, quest.minCount)) return false;
  }
  if (quest.entityPrefix) {
    if (!matchesEntityPrefix(frame, quest.entityPrefix)) return false;
  }
  if (quest.bothEntities) {
    if (!matchesBothEntities(frame, quest.bothEntities)) return false;
  }

  return true;
};

// --- actions ---
function getCmdName(player) {
  return player.username || player.name.string;
}

Photo.grantAdvancement = function (player, advId) {
  if (!advId) return;

  const pd = player.persistentData;
  const now = Date.now();

  const key = "photoquest_cd"; // ONE key total
  const last = pd.getLong(key) || 0;

  if (now - last < 1500) return;
  pd.putLong(key, now);

  const cmd = `advancement grant ${getCmdName(player)} only ${advId}`;
  Photo.log(`[PhotoQuests] CMD: ${cmd}`);
  player.runCommandSilent(cmd);
};

console.log("[PhotoEngine] Loaded.");