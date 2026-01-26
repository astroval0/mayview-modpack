ServerEvents.recipes(event => {
  // Create milling
  event.remove({
    type: "create:milling",
    input: "minecraft:iron_horse_armor",
    output: "minecraft:gold_nugget"
  })

  // Farm and Charm mincing
  event.remove({
    type: "farm_and_charm:mincer",
    input: "minecraft:iron_horse_armor",
    output: "minecraft:gold_nugget"
  })
})