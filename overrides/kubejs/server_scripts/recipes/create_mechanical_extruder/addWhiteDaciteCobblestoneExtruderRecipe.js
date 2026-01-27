ServerEvents.recipes(event => { 
  event.recipes.create_mechanical_extruder.extruding(
        Item.of('biomeswevegone:white_dacite_cobblestone'),
    [
        BlockPredicate.of('minecraft:lava'),
        BlockPredicate.of('minecraft:dried_kelp_block'),
    ]
  )
    
    // Requirements
    .catalyst(BlockPredicate.of("biomeswevegone:white_sand"))
})