const ASSORTED_DYED_BLOCKS_PACKAGE_BLOCK_ID = "kubejs:assorted_dyed_blocks_care_package";

const DYE_NAMES = [
  "white",
  "light_gray",
  "gray",
  "black",
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "light_blue",
  "blue",
  "purple",
  "cyan",
  "magenta",
  "brown",
  "pink",
];

const ASSORTED_DYES_SETS = [
  "wool",
  "terracotta",
  "stained_glass",
];

// Tuning knobs — easy to rebalance later
const VARIANTS = 4;        // number of different colors
const PER_VARIANT = 8;     // blocks per color

BlockEvents.rightClicked(ASSORTED_DYED_BLOCKS_PACKAGE_BLOCK_ID, (event) => {
  let { player, block, level, server } = event;

  if (level.isClientSide()) return;
  if (!player.isCrouching()) return;
  if (!player.mainHandItem.isEmpty()) return;

  // Pick one themed block set
  const chosenSet = pickRandomUnique(ASSORTED_DYES_SETS, 1)[0];
  if (!chosenSet) return;

  // Pick colors
  const chosenColors = pickRandomUnique(DYE_NAMES, VARIANTS);

  // Build item IDs
  const chosenItemIds = chosenColors.map(
    (color) => `minecraft:${color}_${chosenSet}`
  );

  // Drop the goodies
  for (let i = 0; i < chosenItemIds.length; i++) {
    block.popItem(Item.of(chosenItemIds[i], PER_VARIANT));
  }

  global.CarePackageFX.generic(
    { server: server, player: player, block: block },
    {
      themeSound: "minecraft:block.wool.place",
      themeVol: 0.8,
      themePitch: 1.1,
    }
  );

  block.set("minecraft:air");
});

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
