ServerEvents.recipes(event => {
  // Create crushing
  event.remove({
    type: "create:crushing",
    input: "minecraft:copper_ingot",
    output: "minecraft:raw_copper"
  })

  // Create milling
  event.remove({
    type: "create:milling",
    input: "minecraft:copper_ingot",
    output: "minecraft:raw_copper"
  })

  // Farm and Charm mincing
  event.remove({
    type: "farm_and_charm:mincer",
    input: "minecraft:copper_ingot",
    output: "minecraft:raw_copper"
  })
})
