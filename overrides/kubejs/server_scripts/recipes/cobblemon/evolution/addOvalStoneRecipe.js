ServerEvents.recipes(event => {
      event.recipes.farmersdelight.cutting(
        'minecraft:quartz_block',
        '#c:tools/knife',
        [ // results
            Item.of("cobblemon:oval_stone", 1)
        ]
    )
})