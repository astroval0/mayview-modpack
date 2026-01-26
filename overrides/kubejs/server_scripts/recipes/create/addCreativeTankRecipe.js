ServerEvents.recipes((event) => {
  const recipe = {
    type: "create:mechanical_crafting",
    accept_mirrored: false,
    category: "misc",
    key: {
      G: {
        item: "ae2:quartz_vibrant_glass",
      },
      B: {
        item: "minecraft:netherite_block",
      },
      A: {
        item: "ores:adamantite_ingot",
      },
      T: {
        item: "create:fluid_tank",
      },
      N: {
        item: "minecraft:nether_star",
      },
      O: {
        item: "ores:orichalcum_ingot",
      },
      R: {
        item: "mega_showdown:mega_meteorid_radiated_block",
      }
    },
    pattern: [
        "AOGOA",
        "ORNRO",
        "GBTBG",
        "ORNRO",
        "AOGOA"
    ],
    result: {
      count: 1,
      id: "create:creative_fluid_tank",
    },
    show_notification: false,
  };

  event.custom(recipe);
});
