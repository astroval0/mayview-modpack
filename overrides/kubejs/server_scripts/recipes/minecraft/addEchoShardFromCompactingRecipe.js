ServerEvents.recipes(event => {
  event.recipes.create.compacting(
    'minecraft:echo_shard', 
    [
        'minecraft:amethyst_shard', 
        Item.of('minecraft:sculk', 8),
        Fluid.of('minecraft:lava', 1000)
    ])
    .heated()
})