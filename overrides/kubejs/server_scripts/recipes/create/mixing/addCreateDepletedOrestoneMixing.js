ServerEvents.recipes(event => {
  event.recipes.create.mixing('create:crimsite', [Fluid.of('minecraft:lava'), '2x kubejs:depleted_crimsite', '2x minecraft:tuff'])
  event.recipes.create.mixing('create:crimsite', [Fluid.of('create_enchantment_industry:experience', 2), 'kubejs:depleted_crimsite', 'minecraft:tuff'])
  
  event.recipes.create.mixing('create:asurine', [Fluid.of('minecraft:lava'), '2x kubejs:depleted_asurine', '2x minecraft:tuff'])
  event.recipes.create.mixing('create:asurine', [Fluid.of('create_enchantment_industry:experience', 2), 'kubejs:depleted_asurine', 'minecraft:tuff'])

  event.recipes.create.mixing('create:ochrum', [Fluid.of('minecraft:lava'), '2x kubejs:depleted_ochrum', '2x minecraft:tuff'])
  event.recipes.create.mixing('create:ochrum', [Fluid.of('create_enchantment_industry:experience', 2), 'kubejs:depleted_ochrum', 'minecraft:tuff'])

  event.recipes.create.mixing('create:veridium', [Fluid.of('minecraft:lava'), '2x kubejs:depleted_veridium', '2x minecraft:tuff'])
  event.recipes.create.mixing('create:veridium', [Fluid.of('create_enchantment_industry:experience', 2), 'kubejs:depleted_veridium', 'minecraft:tuff'])
  
})
