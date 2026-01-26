ServerEvents.recipes(event => {
  event.recipes.create.compacting(
    'cobblemon:metal_alloy', 
    [
        Item.of('minecraft:iron_ingot', 4), 
        Item.of('ores:cobalt_ingot', 4),
        Fluid.of('minecraft:lava', 1000)
    ])
    .superheated()
})