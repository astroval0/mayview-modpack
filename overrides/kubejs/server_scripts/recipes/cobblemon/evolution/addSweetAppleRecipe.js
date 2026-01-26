// ---------------------------
// =-----= Sweet Apple =-----=
// ---------------------------
ServerEvents.recipes(event => {
    // Cobblemon Campfire Cooking Pot Recipe
    event.custom({
        type: "cobblemon:cooking_pot_shapeless",
        category: "medicines",
        ingredients: [
            {
                tag: "cobblemon:apricorn_logs"
            },
            {
                item: "minecraft:apple"
            },
            {
                item: "minecraft:sugar"
            }
        ],
        result: {
            id: "cobblemon:sweet_apple"
        },
        seasoningTag: "cobblemon:empty",
        seasoningProcessors: []
    })
    // Farmers Delight Cooking Pot Recipe
    event.recipes.farmersdelight.cooking(
        "misc", // recipe book tab - valid values: meals, drinks, misc
        [   
            {
                tag: "cobblemon:apricorn_logs"
            },
            {
                item: "minecraft:apple"
            },
            {
                item: "minecraft:sugar"
            }
        ],
        "cobblemon:sweet_apple", // output
        10, // exp
        10, // cookTime
    )
})