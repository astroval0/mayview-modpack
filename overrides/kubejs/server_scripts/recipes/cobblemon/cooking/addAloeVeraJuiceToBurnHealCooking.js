// --------------------------------------
// =-----= Aloe Vera to Burn Heal =-----=
// --------------------------------------
ServerEvents.recipes(event => {
    // Cobblemon Campfire Cooking Pot Recipe
    event.custom({
        type: "cobblemon:cooking_pot_shapeless",
        category: "medicines",
        ingredients: [
            {
                item: "biomeswevegone:aloe_vera_juice"
            },
            {
                item: "cobblemon:rawst_berry"
            }
        ],
        result: {
            id: "cobblemon:burn_heal",
            count: 4
        },
        seasoningTag: "cobblemon:empty",
        seasoningProcessors: []
    })

    event.recipes.farmersdelight.cooking(
        "misc", // recipe book tab - valid values: meals, drinks, misc
        [   
            {
                item: "biomeswevegone:aloe_vera_juice"
            },
            {
                item: "cobblemon:rawst_berry"
            }
        ],
        Item.of("cobblemon:burn_heal", 4), // output
        10, // exp
        200 // cookTime
    )
})