ServerEvents.recipes(event => {
  event.recipes.create.haunting(
    'create:copper_nugget', 
    'minecraft:iron_nugget'
  )
  event.recipes.create.haunting(
    'minecraft:copper_ingot', 
    'minecraft:iron_ingot'
  )
  event.recipes.create.haunting(
    'minecraft:copper_block', 
    'minecraft:iron_block'
  )
})