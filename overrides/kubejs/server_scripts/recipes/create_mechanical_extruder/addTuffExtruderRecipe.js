ServerEvents.recipes(event => { 
  // Basic Tuff Recipe
  event.recipes.create_mechanical_extruder.extruding(
        Output.of('minecraft:tuff', 0.65),
    [
        BlockPredicate.of('minecraft:lava'),
        BlockPredicate.of('createaddition:seed_oil'),
    ])
    
    // Requirements
    .catalyst(BlockPredicate.of('minecraft:tuff'))
    .advanced(true)
    .requirements(
      [
          RecipeRequirement.maxSpeed(32.0),
          RecipeRequirement.minY(-50),
          RecipeRequirement.maxY(25)
      ]
    )

  // Advanced Tuff Recipe
  event.recipes.create_mechanical_extruder.extruding(
        Output.of('minecraft:tuff'),
    [
        BlockPredicate.of('minecraft:lava'),
        BlockPredicate.of('createaddition:seed_oil'),
    ])
    
    // Requirements
    .catalyst(BlockPredicate.of('create_enchantment_industry:super_experience_block'))
    .consumeBlocks([false,true])
    .advanced(true)
})