ServerEvents.recipes((event) => {
  const recipe = {
    type: "create:mechanical_crafting",
    accept_mirrored: false,
    category: "misc",
    key: {
      S: {
        item: "createaddition:electrum_spool",
      },
      B: {
        item: "minecraft:netherite_block",
      },
      V: {
        item: "ores:viridium_ingot",
      },
      M: {
        item: "createaddition:modular_accumulator",
      },
      N: {
        item: "minecraft:nether_star",
      },
      O: {
        item: "ores:orichalcum_ingot",
      }
    },
    pattern: [
        "VOVOV",
        "OSNSO",
        "VBMBV",
        "OSNSO",
        "VOVOV"
    ],
    result: {
      count: 1,
      id: "createaddition:creative_energy",
    },
    show_notification: false,
  };

  event.custom(recipe);
});
