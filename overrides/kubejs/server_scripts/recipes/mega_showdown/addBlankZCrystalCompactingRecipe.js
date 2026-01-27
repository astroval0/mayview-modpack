ServerEvents.recipes(event => {
  event.recipes.create.compacting(
    'mega_showdown:blank_z', 
    [
        'minecraft:quartz', 
        Item.of('cobblemon:white_apricorn', 8),
        Fluid.of('minecraft:lava', 1000)
    ])
    .superheated()
})