ServerEvents.recipes(event => {
  // Create crushing
  event.remove({
    type: "create:crushing",
    input: "#c:grains",
    output: "farm_and_charm:flour"
  })

  // Create milling
  event.remove({
    type: "create:milling",
    input: "#c:grains",
    output: "farm_and_charm:flour"
  })

  // Farm and Charm mincing
  event.remove({
    type: "farm_and_charm:mincer",
    input: "#c:grains",
    output: "farm_and_charm:flour"
  })
})
