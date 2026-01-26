// Yes Meteoroid is typod as Metoerid in Mega Showdown 1.5.1 + 1.7.1
ServerEvents.recipes(event => { 
  event.recipes.create_mechanical_extruder.extruding(
        Item.of('mega_showdown:mega_meteorid_block'),
    [
        BlockPredicate.of('create_dragons_plus:dragon_breath'),
        BlockPredicate.of('minecraft:lava'),
    ])
    
    // Requirements
    .catalyst(BlockPredicate.of("minecraft:obsidian")) 
    .advanced(true)  
    .requirements(
        [
            RecipeRequirement.maxSpeed(16.0),
            RecipeRequirement.minY(-50),
            RecipeRequirement.maxY(25)
        ]
    )
})