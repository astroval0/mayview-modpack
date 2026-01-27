ServerEvents.recipes((event) => {
    // Remove existing display case recipe
    event.remove({ output: "cobblemon:display_case" });
    // Add modified display case recipe -
    // #c:glass_blocks/colorless instead of plain glass
    event.shaped("cobblemon:display_case", [
        "GGG",
        "SWS"
        ], {
            G: "#c:glass_blocks/colorless",
            W: "#minecraft:wool",
            S: "minecraft:smooth_stone"
        }
    );
})