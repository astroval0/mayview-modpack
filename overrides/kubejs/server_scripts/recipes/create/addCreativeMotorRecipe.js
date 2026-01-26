ServerEvents.recipes((event) => {
  const recipe = {
    type: "create:mechanical_crafting",
    accept_mirrored: false,
    category: "misc",
    key: {
      A: {
        item: "create:andesite_alloy",
      },
      B: {
        item: "minecraft:netherite_block",
      },
      I: {
        item: "ores:adamantite_ingot",
      },
      M: {
        item: "createaddition:electric_motor",
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
        "ARIRA",
        "RONOR",
        "IBMBI",
        "RONOR",
        "ARIRA"
    ],
    result: {
      count: 1,
      id: "create:creative_motor",
    },
    show_notification: false,
  };

  event.custom(recipe);
});
