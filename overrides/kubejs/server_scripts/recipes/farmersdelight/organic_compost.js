ServerEvents.recipes((event) => {
  // Remove existing recipe for organic compost
  event.remove({ output: "farmersdelight:organic_compost" });

  // Add new recipes for organic compost using dirt, rotten flesh, straw, tree bark, and fertilizers
  // Recipe 1: 3 rotten flesh, 3 straw, 3 fertilizers, and 1 dirt
  event.shaped(
    Item.of("farmersdelight:organic_compost", 1),
    ["DRR", "SSF", "FFF"],
    {
      D: "#minecraft:dirt",
      R: "minecraft:rotten_flesh",
      S: "farmersdelight:straw",
      F: "#c:fertilizers",
    }
  );
  // Recipe 2: 3 tree bark, 3 straw, 3 fertilizers, and 1 dirt
  event.shaped(
    Item.of("farmersdelight:organic_compost", 1),
    ["DSS", "FFT", "TTT"],
    {
      D: "#minecraft:dirt",
      T: "farmersdelight:tree_bark",
      S: "farmersdelight:straw",
      F: "#c:fertilizers",
    }
  );
});
