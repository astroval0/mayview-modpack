ServerEvents.recipes(event => {
  // Create milling
  event.remove({
    type: "create:milling",
    input: "minecraft:golden_horse_armor",
    output: "minecraft:iron_nugget"
  })

  // Farm and Charm mincing
  event.remove({
    type: "farm_and_charm:mincer",
    input: "minecraft:golden_horse_armor",
    output: "minecraft:iron_nugget"
  })
})