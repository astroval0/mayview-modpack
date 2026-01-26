ServerEvents.recipes((e) => {
  e.remove({ output: "cobblemon:pc" });
  e.shaped("cobblemon:pc", [
    "IGI",
    "ICI",
    "SCS"
    ], {
        I: "minecraft:iron_ingot",
        G: "#c:glass_blocks/colorless",
        C: "minecraft:copper_ingot",
        S: "minecraft:smooth_stone"
    }
  );
})