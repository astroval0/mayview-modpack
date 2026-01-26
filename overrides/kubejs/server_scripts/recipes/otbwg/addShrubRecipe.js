ServerEvents.recipes(event => {
    // shrub to sticks
    event.shapeless(
        Item.of('minecraft:stick', 6),
        [
            'biomeswevegone:shrub'
        ]
    )
})