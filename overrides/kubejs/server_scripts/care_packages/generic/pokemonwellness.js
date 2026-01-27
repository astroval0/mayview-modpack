const POKEMON_WELLNESS_PACKAGE_BLOCK_ID = "kubejs:pokemon_wellness_package";

const POKEMON_WELLNESS_PACKAGE_ITEM_IDS = [
  "cobblemon:super_potion",
  "cobblemon:elixir",
  "cobblemon:revive",
  "cobblemon:full_heal"
];

BlockEvents.rightClicked(POKEMON_WELLNESS_PACKAGE_BLOCK_ID, (event) => {
  let { player, block, level, server } = event;

  if (level.isClientSide()) return;
  if (!player.isCrouching()) return;
  if (!player.mainHandItem.isEmpty()) return;

  const chosen = pickRandomUnique(POKEMON_WELLNESS_PACKAGE_ITEM_IDS, randInt(2, 3));

  block.popItem(Item.of("cobblemon:super_potion", 4));
  block.popItem(Item.of("cobblemon:ether", 2));
  block.popItem(Item.of("cobblemon:elixir", 2));
  block.popItem(Item.of("cobblemon:revive", 2));
  block.popItem(Item.of("cobblemon:full_heal", 2));

  global.CarePackageFX.generic(
    { server: server, player: player, block: block },
    {
      themeSound: "cobblemon:item.medicine.candy.use",
      themeVol: 0.1,
      themePitch: 1.1,
    }
  );

  block.set("minecraft:air");
});

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandomUnique(list, count) {
  if (!Array.isArray(list) || list.length === 0) return [];

  const pool = list.slice();
  const picked = [];

  const n = Math.min(count, pool.length);
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    picked.push(pool[idx]);
    pool.splice(idx, 1);
  }

  return picked;
}
