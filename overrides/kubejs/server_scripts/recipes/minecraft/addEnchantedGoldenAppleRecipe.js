ServerEvents.recipes((event) => {
  const recipe = {
    type: "create:mechanical_crafting",
    accept_mirrored: false,
    category: "misc",
    key: {
      A: {
        item: "minecraft:gold_block",
      },
      B: {
        item: "vinery:apple_bag",
      },
      G: {
        item: "mayview:gold_coin",
      }
    },
    pattern: [
        " AAA ",
        "AGGGA",
        "AGBGA",
        "AGGGA",
        " AAA "
    ],
    result: {
      count: 1,
      id: "minecraft:enchanted_golden_apple",
    },
    show_notification: false,
  };

  event.custom(recipe);
})