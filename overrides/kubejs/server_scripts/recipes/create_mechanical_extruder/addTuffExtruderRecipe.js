ServerEvents.recipes(event => { 
  event.recipes.create_mechanical_extruder.extruding(
        Output.of('minecraft:tuff', 0.65),
    [
        BlockPredicate.of('minecraft:lava'),
        BlockPredicate.of('createaddition:seed_oil'),
    ])
    
    // Requirements
    .catalyst(BlockPredicate.of("minecraft:gravel"))
    .advanced(true)
    .requirements(
      [
          RecipeRequirement.maxSpeed(32.0),
          RecipeRequirement.minY(-50),
          RecipeRequirement.maxY(25)
      ]
    )
})