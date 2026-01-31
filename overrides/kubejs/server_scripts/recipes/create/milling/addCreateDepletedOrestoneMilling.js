ServerEvents.recipes(event => {
  event.recipes.create.milling(Output.of('minecraft:iron_nugget', 0.65), 'kubejs:depleted_crimsite')
  event.recipes.create.milling(Output.of('create:zinc_nugget', 0.65), 'kubejs:depleted_asurine')
  event.recipes.create.milling(Output.of('minecraft:gold_nugget', 0.65), 'kubejs:depleted_ochrum')
  event.recipes.create.milling(Output.of('create:copper_nugget', 0.65), 'kubejs:depleted_veridium')
})
