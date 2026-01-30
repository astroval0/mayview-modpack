// kubejs/server_scripts/recipes/minecraft/crushing/addVanillaMetalJunkDrawerCrushing.js
console.info('[Mayview] Junk drawer crushing loaded')

ServerEvents.recipes(event => {
  // Junk drawer: common crafted/loot items that should recycle cleanly.
  if (!global.Mayview || !global.Mayview.crushing || !global.Mayview.crushing.registerEntries) {
    console.error('[Mayview] crushing_helpers not available! (startup script failed or not loaded)')
    return
  }
  const entries = [
      // ----------------
      // Chains / Bars
      // ----------------
      { input: 'minecraft:chain', output: 'minecraft:iron_nugget', count: 3 },
      { input: 'minecraft:iron_bars', output: 'minecraft:iron_nugget', count: 2 },

      // ----------------
      // Lanterns
      // ----------------
      { input: 'minecraft:lantern', output: 'minecraft:iron_nugget', count: 4 },
      { input: 'minecraft:soul_lantern', output: 'minecraft:iron_nugget', count: 4 },

      // ----------------
      // Buckets / Shears / Flint&Steel
      // ----------------
      { input: 'minecraft:bucket', output: 'minecraft:iron_nugget', count: 6 },
      { input: 'minecraft:shears', output: 'minecraft:iron_nugget', count: 4 },
      { input: 'minecraft:flint_and_steel', output: 'minecraft:iron_nugget', count: 2 },

      // ----------------
      // Cauldrons / Anvils
      // ----------------
      { input: 'minecraft:cauldron', output: 'minecraft:iron_ingot', count: 3 },
      { input: 'minecraft:anvil', output: 'minecraft:iron_ingot', count: 6 },
      { input: 'minecraft:chipped_anvil', output: 'minecraft:iron_ingot', count: 5 },
      { input: 'minecraft:damaged_anvil', output: 'minecraft:iron_ingot', count: 4 },

      // ----------------
      // Minecart Squadron
      // ----------------
      { input: 'minecraft:minecart', output: 'minecraft:iron_ingot', count: 2 },
      { input: 'minecraft:chest_minecart', output: 'minecraft:iron_ingot', count: 2 },
      { input: 'minecraft:hopper_minecart', output: 'minecraft:iron_ingot', count: 2 },
      { input: 'minecraft:furnace_minecart', output: 'minecraft:iron_ingot', count: 2 },
      { input: 'minecraft:tnt_minecart', output: 'minecraft:iron_ingot', count: 2 },

      // ----------------
      // Rails on Rails
      // ----------------
      { input: 'minecraft:rail', output: 'minecraft:iron_nugget', count: 1 },
      { input: 'minecraft:powered_rail', output: 'minecraft:gold_nugget', count: 1 },
      { input: 'minecraft:detector_rail', output: 'minecraft:iron_nugget', count: 1 },
      { input: 'minecraft:activator_rail', output: 'minecraft:iron_nugget', count: 1 },

      // ----------------
      // Iron doors / trapdoors (partial)
      // ----------------
      { input: 'minecraft:iron_door', output: 'minecraft:iron_nugget', count: 6 },
      { input: 'minecraft:iron_trapdoor', output: 'minecraft:iron_nugget', count: 4 },

      // ----------------
      // “Hardware” items (partial, safe)
      // ----------------
      { input: 'minecraft:tripwire_hook', output: 'minecraft:iron_nugget', count: 1 },
      { input: 'minecraft:compass', output: 'minecraft:iron_nugget', count: 2 },
      { input: 'minecraft:clock', output: 'minecraft:gold_nugget', count: 2 },

      // ----------------
      // Golden-ish utility (keep tiny)
      // ----------------
      { input: 'minecraft:golden_carrot', output: 'minecraft:gold_nugget', count: 1 },
      { input: 'minecraft:glistering_melon_slice', output: 'minecraft:gold_nugget', count: 1 },

      // ----------------
      // Light metal décor odds & ends
      // ----------------
      { input: 'minecraft:bell', output: 'minecraft:gold_nugget', count: 4 },
      { input: 'minecraft:lightning_rod', output: 'minecraft:copper_ingot', count: 1 },

      // ----------------
      // Redstone-ish parts (careful: keep small)
      // ----------------
      { input: 'minecraft:observer', output: 'minecraft:quartz', count: 1 },
      { input: 'minecraft:piston', output: 'minecraft:iron_nugget', count: 2 },
      { input: 'minecraft:sticky_piston', output: 'minecraft:iron_nugget', count: 2 },
  ]

  global.Mayview.crushing.registerEntries(event, {
    entries: entries,
    xpChance: 0.15,
    // debug: true
  })
})
