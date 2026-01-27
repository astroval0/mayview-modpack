ServerEvents.recipes(event => {
        event.recipes.create.mixing(
            'relics:relic_experience_bottle', 
            [
                'minecraft:experience_bottle',
                Fluid.of('create:honey', 250)
            ]
        )
        .heated()
})