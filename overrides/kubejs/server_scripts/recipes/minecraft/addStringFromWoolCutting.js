ServerEvents.recipes(event => {
      event.recipes.farmersdelight.cutting(
        '#minecraft:wool',
        '#c:tools/shear',
        [ // results
            Item.of("minecraft:string", 2),
            ChanceResult.of("minecraft:string", 0.75)
        ]
    )
})