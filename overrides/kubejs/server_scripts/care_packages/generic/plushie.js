const PLUSHIE_PACKAGE_BLOCK_ID = "kubejs:plushie_care_package";

const PLUSHIE_PACKAGE_ITEM_IDS = [
"plushies:panda_plushie",
"plushies:parrot_plushie",
"plushies:camel_plushie",
"plushies:llama_plushie",
"plushies:cow_plushie",
"plushies:mooshroom_plushie",
"plushies:sheep_plushie",
"plushies:pig_plushie",
"plushies:horse_plushie",
"plushies:mule_plushie",
"plushies:donkey_plushie",
"plushies:bee_plushie",
"plushies:cat_plushie",
"plushies:chicken_plushie",
"plushies:wolf_plushie",
"plushies:allay_plushie",
"plushies:red_fox_plushie",
"plushies:white_fox_plushie",
"plushies:snow_golem_plushie",
"plushies:polar_bear_plushie",
"plushies:goat_plushie",
"plushies:sniffer_plushie",
"plushies:bat_plushie",
"plushies:ocelot_plushie",
"plushies:armadillo_plushie",
"plushies:brown_rabbit_plushie",
"plushies:white_rabbit_plushie",
"plushies:black_rabbit_plushie",
"plushies:white_splotched_rabbit_plushie",
"plushies:yellow_rabbit_plushie",
"plushies:salt_rabbit_plushie",
"plushies:toast_rabbit_plushie",
"plushies:killer_bunny_plushie",
"plushies:iron_golem_plushie",
"plushies:wandering_trader_plushie",
"plushies:villager_plushie",
"plushies:zombie_villager_plushie",
"plushies:pillager_plushie",
"plushies:illusioner_plushie",
"plushies:vindicator_plushie",
"plushies:evoker_plushie",
"plushies:witch_plushie",
"plushies:ravager_plushie",
"plushies:vex_plushie",
"plushies:breeze_plushie",
"plushies:creeper_plushie",
"plushies:skeleton_plushie",
"plushies:stray_plushie",
"plushies:zombie_horse_plushie",
"plushies:bogged_plushie",
"plushies:skeleton_horse_plushie",
"plushies:spider_plushie",
"plushies:cave_spider_plushie",
"plushies:warden_plushie",
"plushies:wither_plushie",
"plushies:phantom_plushie",
"plushies:silverfish_plushie",
"plushies:slime_plushie",
"plushies:zombie_plushie",
"plushies:husk_plushie",
"plushies:drowned_plushie",
"plushies:axolotl_plushie",
"plushies:dolphin_plushie",
"plushies:squid_plushie",
"plushies:glow_squid_plushie",
"plushies:guardian_plushie",
"plushies:elder_guardian_plushie",
"plushies:turtle_plushie",
"plushies:frog_plushie",
"plushies:warm_frog_plushie",
"plushies:cold_frog_plushie",
"plushies:tadpole_plushie",
"plushies:salmon_plushie",
"plushies:cod_plushie",
"plushies:pufferfish_plushie",
"plushies:small_tropical_fish_plushie",
"plushies:large_tropical_fish_plushie",
"plushies:wither_skeleton_plushie",
"plushies:piglin_plushie",
"plushies:piglin_brute_plushie",
"plushies:zombiefied_piglin_plushie",
"plushies:blaze_plushie",
"plushies:ghast_plushie",
"plushies:hoglin_plushie",
"plushies:zoglin_plushie",
"plushies:strider_plushie",
"plushies:magma_cube_plushie",
"plushies:enderman_plushie",
"plushies:endermite_plushie",
"plushies:shulker_plushie",
"plushies:dragon_plushie"
];

BlockEvents.rightClicked(PLUSHIE_PACKAGE_BLOCK_ID, (event) => {
  let { player, block, level, server } = event;

  if (level.isClientSide()) return;
  if (!player.isCrouching()) return;
  if (!player.mainHandItem.isEmpty()) return;

  const chosen = pickRandomUnique(PLUSHIE_PACKAGE_ITEM_IDS, randInt(2, 4));

  for (let i = 0; i < chosen.length; i++) {
    block.popItem(Item.of(chosen[i], 1));
  }

  global.CarePackageFX.generic(
    { server: server, player: player, block: block },
    {
      themeSound: "minecraft:block.wool.place",
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
