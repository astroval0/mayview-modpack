// kubejs/server_scripts/recipes/create/crushing/addCreateArmorCrushing.js
console.info('[Mayview] Vanilla armor crushing loaded')

ServerEvents.recipes(event => {
  // Define yields per armor slot
  const armorYields = {
    helmet: 2,
    chestplate: 3,
    leggings: 3,
    boots: 1
  }

  // Define XP nugget output chance
  const XP_CHANCE = 0.25   // 25% chance

  // Master list: explicit item IDs per slot
  const armorSets = [
    {
      setName: 'Create Copper Diving',
      output: 'minecraft:copper_ingot',
      inputs: {
        helmet: 'create:copper_diving_helmet',
        chestplate: 'create:copper_backtank',
        boots: 'create:copper_diving_boots'
      }
    },
    {
      setName: 'Create Netherite Diving',
      output: 'minecraft:netherite_scrap',
      inputs: {
        helmet: 'create:netherite_diving_helmet',
        chestplate: 'create:netherite_backtank',
        boots: 'create:netherite_diving_boots'
      }
    },
    {
      setName: 'Create Cardboard',
      output: 'create:cardboard',
      inputs: {
        helmet: 'create:cardboard_helmet',
        chestplate: 'create:cardboard_chestplate',
        leggings: 'create:cardboard_leggings',
        boots: 'create:cardboard_boots'
      }
    }
    
    // Add set Schema
    // {
    //   setName: 'Mod Steel (Example)',
    //   output: 'modid:steel_ingot',
    //   inputs: {
    //     helmet: 'modid:steel_helmet',
    //     chestplate: 'modid:steel_chestplate',
    //     leggings: 'modid:steel_leggings',
    //     boots: 'modid:steel_boots'
    //   }
    // },
  ]

  // Generator
  armorSets.forEach(set => {
    Object.entries(set.inputs).forEach(([slot, inputId]) => {
      const count = armorYields[slot] ?? 1

      event.recipes.create.crushing(
        [
          Item.of(set.output, count),
          CreateItem.of('create:experience_nugget', XP_CHANCE),
          CreateItem.of('2x create:experience_nugget', XP_CHANCE * 0.4)
        ],
        [inputId]
      )
    })
  })
})