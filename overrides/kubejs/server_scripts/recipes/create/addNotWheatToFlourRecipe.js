// Create Millstone Recipe for Oat, Barley, and Corn to 4x Flour
ServerEvents.recipes(event => {
  const millingFlourOutput = (output, grainInput) => {
    event.recipes.create.milling(
    '4x ' + output, 
    grainInput
    )
  }

    millingFlourOutput('farm_and_charm:flour', 'farm_and_charm:corn')
    millingFlourOutput('farm_and_charm:flour', 'farm_and_charm:oat')
    millingFlourOutput('farm_and_charm:flour', 'farm_and_charm:barley')
    millingFlourOutput('farm_and_charm:flour', 'biomeswevegone:prairie_grass')
    millingFlourOutput('farm_and_charm:flour', 'biomeswevegone:tall_prairie_grass')
})

// Farm and Charm Mincer Recipe for Oat, Barley, and Corn to 4x Flour
ServerEvents.recipes(event => {
  const mincerFlourOutput = (output, grainInput) => {
    event.custom({
        type: "farm_and_charm:mincer",
        ingredient:
            { item: grainInput },
        recipe_type: "GRAIN",
        result:
            { id: output, count: 4 }
    })
  }
    mincerFlourOutput('farm_and_charm:flour', 'farm_and_charm:corn')
    mincerFlourOutput('farm_and_charm:flour', 'farm_and_charm:oat')
    mincerFlourOutput('farm_and_charm:flour', 'farm_and_charm:barley')
})

// Create Crushing Recipe for Oat, Barley, and Corn to 4x Flour
ServerEvents.recipes(event => {
    const crushingFlourOutput = (output, grainInput) => {
        event.recipes.create.crushing(
            '4x ' + output,
            grainInput
        )
    }
    crushingFlourOutput('farm_and_charm:flour', 'farm_and_charm:corn')
    crushingFlourOutput('farm_and_charm:flour', 'farm_and_charm:oat')
    crushingFlourOutput('farm_and_charm:flour', 'farm_and_charm:barley')
})