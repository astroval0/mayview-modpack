ServerEvents.recipes(event => {
    event.recipes.create.filling(
        "biomeswevegone:white_overgrown_dacite",
        [
            Fluid.of('minecraft:water', 250),
             'biomeswevegone:white_dacite'
        ]
    )
    event.recipes.create.filling(
        "biomeswevegone:overgrown_dacite",
        [
            Fluid.of('minecraft:water', 250),
             'biomeswevegone:dacite'
        ]
    )    
    event.recipes.create.filling(
        "biomeswevegone:overgrown_stone",
        [
            Fluid.of('minecraft:water', 250),
             'minecraft:stone'
        ]
    )
})