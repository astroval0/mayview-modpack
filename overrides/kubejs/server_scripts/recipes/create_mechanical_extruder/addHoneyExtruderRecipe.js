ServerEvents.recipes(event => { 
  event.recipes.create_mechanical_extruder.extruding(
        Output.of('minecraft:honey_block', 0.55),
    [
        BlockPredicate.of('create:honey'),
        BlockPredicate.of('create_enchantment_industry:super_experience_block'),
    ])
    
    // Requirements
    .catalyst(BlockPredicate.of("minecraft:honeycomb_block"))
    .advanced(true)
    .requirements(
      [
          RecipeRequirement.maxSpeed(25.0),
          RecipeRequirement.minY(60),
          RecipeRequirement.maxY(70)
      ]
    )
})