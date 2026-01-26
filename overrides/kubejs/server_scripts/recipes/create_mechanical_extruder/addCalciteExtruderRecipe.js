ServerEvents.recipes(event => { 
  event.recipes.create_mechanical_extruder.extruding(
        Item.of('minecraft:calcite'),
    [
        BlockPredicate.of('minecraft:water'),
        BlockPredicate.of('minecraft:dried_kelp_block'),
    ])
    
    // Requirements
    .catalyst(BlockPredicate.of("create:limestone"))
})