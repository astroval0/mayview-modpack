var quests = [
  {
    id: "5874413FBDDE2AC1",
    dimension: "minecraft:overworld",
    biome: "minecraft:swamp",
    entity: "ribbits:ribbit",
  },
  { id: "3FB93E2BFE62D0F8", entity: "minecraft:villager", minCount: 10 },
  { id: "025DE646E78F585B", entity: "minecraft:ender_dragon" },
  { id: "2D938394EDC810D6", entity: "minecraft:wither" },
  { id: "1DD5C356333EE0F8", entity: "minecraft:warden" },
  { id: "076F0B67237FAD54", type: "black_and_white", weather: "Rain" },
  { id: "3358F20C6F1230D8", type: "color", entity: "minecraft:bee" },
  {
    id: "6C223A15828BD608",
    dimension: "minecraft:the_end",
    entity: "minecraft:enderman",
  },
  {
    id: "78CDC247D47F1399",
    bothEntities: ["minecraft:iron_golem", "minecraft:zombie"],
  },
  {
    id: "7421B16C7DA32D20",
    biome: "minecraft:dark_forest",
    entity: "endermanoverhaul:dark_oak_enderman",
  },
  {
    id: "2EA145C196D427B3",
    biome: "biomeswevegone:orchard",
    pokemon: "combee",
  },
  {
    id: "15B7AF4DF1C30B14",
    timeWindows: [
      { from: 12000, to: 13000 },
      { from: 23000, to: 24000 },
      { from: 0, to: 1000 },
    ],
    entity: "minecraft:phantom",
  },
  { id: "6BA76324A48CF929", entity: "minecraft:polar_bear", minCount: 2 },
  {
    id: "3B5B80FC07FF0300",
    dimension: "minecraft:the_nether",
    structures: ["betterfortresses:fortress"],
    bothEntities: ["minecraft:wither_skeleton", "minecraft:blaze"],
  },
  {
    id: "61BC1B6A2524CBE7",
    structures: ["minecraft:monument"],
    entity: "minecraft:guardian",
  },
  {
    id: "4527877C804CF3D8",
    bothEntities: ["minecraft:pillager", "minecraft:villager"],
  },
  {
    id: "2DDE3DB9837389A1",
    biome: "minecraft:warm_ocean",
    entity: "minecraft:tropical_fish",
  },
  {
    id: "25AF01454763F97E",
    biome: "minecraft:bamboo_jungle",
    entity: "minecraft:panda",
  },
  {
    id: "39A837209DEB73E3",
    biome: "minecraft:lush_caves",
    entity: "minecraft:axolotl",
    minCount: 2,
  },
  {
    id: "51C4CD8339C0BCFF",
    bothEntities: ["minecraft:cat", "minecraft:creeper"],
  },
  {
    id: "7DFE355C46ABBA23",
    biome: "minecraft:mushroom_fields",
    bothEntities: ["minecraft:mooshroom", "creeper_overhaul:mushroom_creeper"],
  },
  { id: "25A5DF50AF9EDA14", entity: "minecraft:pig" },
  { id: "25A5DF50AF9EDA14", entity: "minecraft:sheep" },
  { id: "25A5DF50AF9EDA14", entity: "minecraft:cow" },
];

function parseCameraData(dataObj) {
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
    (f.entities_in_frame || []).forEach(function (e) {
      counts[e.id] = (counts[e.id] || 0) + 1;

      // Track Cobblemon name separately
      if (e.id === "cobblemon:pokemon" && e.name) {
        var key = String(e.name).toLowerCase();
        pokemonCounts[key] = (pokemonCounts[key] || 0) + 1;
      }
    });
    var entities = Object.keys(counts).map(function (id) {
      return { id: id, count: counts[id] };
    });
    out.push({
      weather: extra.weather || null,
      timeOfDay: extra.day_time != null ? extra.day_time : null,
      dimension: extra.dimension || null,
      biome: extra.biome || null,
      structures: Array.isArray(extra.structures)
        ? extra.structures.slice()
        : [],
      entities: entities,
      pokemonCounts: pokemonCounts,
      filmType: typeKey,
      isColor: isColor,
    });
    // inside the for-loop in parseCameraData, right before counts:
    console.log(
      "RAW entities_in_frame:",
      JSON.stringify(f.entities_in_frame, null, 2),
    );
    console.log("RAW extra_data:", JSON.stringify(f.extra_data, null, 2));
  }

  console.log(out);
  return out;
}

function frameMatches(frame, quest) {
  if (quest.dimension && frame.dimension !== quest.dimension) return false;
  if (quest.biome && frame.biome !== quest.biome) return false;
  if (quest.weather && frame.weather !== quest.weather) return false;
  if (quest.type) {
    if (quest.type === "color" && !frame.isColor) return false;
    if (quest.type === "black_and_white" && frame.isColor) return false;
  }
  if (quest.structures) {
    if (!quest.structures.every((s) => frame.structures.includes(s)))
      return false;
  }
  if (quest.entity) {
    var e = frame.entities.find((e) => e.id === quest.entity);
    if (!e || (quest.minCount != null && e.count < quest.minCount))
      return false;
  }
  if (quest.pokemon) {
    var key = String(quest.pokemon).toLowerCase();
    var count = frame.pokemonCounts && frame.pokemonCounts[key];
    if (!count || (quest.minCount != null && count < quest.minCount))
      return false;
  }
  if (quest.entityPrefix) {
    if (!frame.entities.some((e) => e.id.startsWith(quest.entityPrefix)))
      return false;
  }
  if (quest.bothEntities) {
    if (
      !quest.bothEntities.every((id) => frame.entities.some((e) => e.id === id))
    )
      return false;
  }
  if (quest.timeWindows) {
    var t = frame.timeOfDay;
    if (t == null) return false;
    t = Math.floor(t / 24000);
    var ok = quest.timeWindows.some(function (w) {
      return w.from <= w.to ? t >= w.from && t < w.to : t >= w.from || t < w.to;
    });
    if (!ok) return false;
  }
  return true;
}

function toastOnce(player, key, title, subtitle) {
  var pd = player.persistentData;
  if (!pd.photoQuestToasts) pd.photoQuestToasts = {};
  if (pd.photoQuestToasts[key]) return;
  pd.photoQuestToasts[key] = true;

  player.notify(title, subtitle);
}

PlayerEvents.inventoryChanged(function (event) {
  if (event.item.id !== "exposure:camera") return;

  var json;
  try {
    json = JSON.parse(event.item.toJson());
  } catch (err) {
    return;
  }

  var frames = parseCameraData(json);
  if (!frames.length) return;

  var server = FTBQuests.getServerDataFromPlayer(event.player);

  frames.forEach(function (frame) {
    quests.forEach(function (q) {
      if (frameMatches(frame, q)) {
        server.complete(q.id);

        var who = q.pokemon ? q.pokemon : q.entity ? q.entity : "Subject";
        var where = q.biome
          ? q.biome.split(":")[1].replace(/_/g, " ")
          : "somewhere";

        toastOnce(
          event.player,
          q.id,
          "Poke Snap Complete!",
          "Picture taken of " + who + " in the " + where,
        );
      }
    });
  });
});
