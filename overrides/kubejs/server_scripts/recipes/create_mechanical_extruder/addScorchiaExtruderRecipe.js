ServerEvents.recipes(event => { 
  event.recipes.create_mechanical_extruder.extruding(
        Item.of('create:scorchia'),
    [
        BlockPredicate.of('minecraft:lava'),
        BlockPredicate.of('create:chocolate'),
    ])
    
    // Requirements
    .catalyst(BlockPredicate.of("minecraft:black_concrete_powder"))
    .advanced(true)
})