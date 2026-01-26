ServerEvents.recipes((event) => {
  event.remove({ output: "createcobblestone:mechanical_generator" });
  
  const recipe = {
    type: "create:mechanical_crafting",
    accept_mirrored: false,
    category: "misc",
    key: {
      A: {
        item: "create:brass_casing",
      },
      B: {
        item: "create:brass_block",
      },
      C: {
        item: "create:chocolate_bucket",
      },
      D: {
        item: "create:mechanical_drill",
      },
      E: {
        item: "createaddition:bioethanol_bucket",
      },
      H: {
        item: "create:honey_bucket",
      },
      L: {
        item: "minecraft:lava_bucket",
      },
      S: {
        item: "createaddition:seed_oil_bucket",
      },
      W: {
        item: "minecraft:water_bucket",
      },
      X: {
        item: "mynethersdelight:hot_wings_bucket",
      },
      Z: {
        item: "create_enchantment_industry:experience_bucket",
      }
    },
    pattern: [
        "BAAAB",
        "AECSA",
        "AWDLA",
        "AZHXA",
        "BAAAB"
    ],
    result: {
      count: 1,
      id: "createcobblestone:mechanical_generator",
    },
    show_notification: false,
  };

  event.custom(recipe);
});
