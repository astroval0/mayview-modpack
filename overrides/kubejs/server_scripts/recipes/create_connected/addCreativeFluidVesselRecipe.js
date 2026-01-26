ServerEvents.recipes(event => {
    // Create Connected Fluid Vessel Recipe
    event.shapeless(
        Item.of('create_connected:creative_fluid_vessel', 1),
        [
            'create:creative_fluid_tank'
        ]
    )

    event.shapeless(
        Item.of('create:creative_fluid_tank', 1),
        [
            'create_connected:creative_fluid_vessel'
        ]
    )
})