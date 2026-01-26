ServerEvents.recipes(event => { 
  event.recipes.create_mechanical_extruder.extruding(
        Item.of('minecraft:cobbled_deepslate'),
    [
        BlockPredicate.of('minecraft:water'),
        BlockPredicate.of('minecraft:lava'),
    ])
    
    // Requirements
    .catalyst(BlockPredicate.of("minecraft:cobblestone"))
    .requirements(
      [
          RecipeRequirement.maxSpeed(16.0),
          RecipeRequirement.maxY(0)
      ]
    )
})