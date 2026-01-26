// ---------------------------
// =-----= Exp Candy S =-----=
// ---------------------------
ServerEvents.recipes(event => {
    // Cobblemon Campfire Cooking Pot Recipe
    event.custom({
        type: "cobblemon:cooking_pot_shapeless",
        category: "medicines",
        ingredients: [
            {
                tag: "c:drinks/milk"
            },
            {
                item: "minecraft:honeycomb"
            },
            {
                item: "minecraft:dried_kelp"
            }
        ],
        result: {
            id: "cobblemon:exp_candy_s"
        },
        seasoningTag: "cobblemon:empty",
        seasoningProcessors: []
    })

    event.recipes.farmersdelight.cooking(
        "misc", // recipe book tab - valid values: meals, drinks, misc
        [   
            {
                tag: "c:drinks/milk"
            },
            {
                item: "minecraft:honeycomb"
            },
            {
                item: "minecraft:dried_kelp"
            }
        ],
        "cobblemon:exp_candy_s", // output
        10, // exp
        10, // cookTime
    )
})