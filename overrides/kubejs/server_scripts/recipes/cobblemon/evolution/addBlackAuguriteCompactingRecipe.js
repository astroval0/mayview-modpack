ServerEvents.recipes(event => {
  event.recipes.create.compacting(
    'cobblemon:black_augurite', 
    [
        Item.of('minecraft:obsidian', 2), 
        Item.of('minecraft:sand', 2),
        Fluid.of('minecraft:lava', 1000)
    ])
    .heated()
})