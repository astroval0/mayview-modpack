ServerEvents.recipes(event => {
  event.recipes.create.compacting(
    '2x mega_showdown:wishing_star', 
    [
        'minecraft:nether_star', 
        'minecraft:obsidian',
        Fluid.of('minecraft:lava', 1000)
    ])
    .superheated()
})