ServerEvents.recipes(event => {
  // Define yields per armor slot
  const armorYields = {
    helmet: 2,
    chestplate: 3,
    leggings: 3,
    boots: 1
  }

  // Optional: define XP nugget chance and count
  const XP_NUGGET_CHANCE = 0.25   // 25% chance
  const XP_NUGGET_COUNT  = 2

  // Master list: explicit item IDs per slot
  const armorSets = [
    {
      setName: 'JOres Copper',
      output: 'minecraft:copper_ingot',
      inputs: {
        helmet: 'ores:copper_helmet',
        chestplate: 'ores:copper_chestplate',
        leggings: 'ores:copper_leggings',
        boots: 'ores:copper_boots'
      }
    },
    {
      setName: 'JOres Cobalt',
      output: 'ores:cobalt_ingot',
      inputs: {
        helmet: 'ores:cobalt_helmet',
        chestplate: 'ores:cobalt_chestplate',
        leggings: 'ores:cobalt_leggings',
        boots: 'ores:cobalt_boots'
      }
    },
    {
      setName: 'JOres Magnite',
      output: 'ores:magnite_ingot',
      inputs: {
        helmet: 'ores:magnite_helmet',
        chestplate: 'ores:magnite_chestplate',
        leggings: 'ores:magnite_leggings',
        boots: 'ores:magnite_boots'
      }
    },
    {
      setName: 'JOres Mythril',
      output: 'ores:mythril_ingot',
      inputs: {
        helmet: 'ores:mythril_helmet',
        chestplate: 'ores:mythril_chestplate',
        leggings: 'ores:mythril_leggings',
        boots: 'ores:mythril_boots'
      }
    },
    {
      setName: 'JOres Orichalcum',
      output: 'ores:orichalcum_ingot',
      inputs: {
        helmet: 'ores:orichalcum_helmet',
        chestplate: 'ores:orichalcum_chestplate',
        leggings: 'ores:orichalcum_leggings',
        boots: 'ores:orichalcum_boots'
      }
    },
    {
      setName: 'JOres Adamantite',
      output: 'ores:adamantite_ingot',
      inputs: {
        helmet: 'ores:adamantite_helmet',
        chestplate: 'ores:adamantite_chestplate',
        leggings: 'ores:adamantite_leggings',
        boots: 'ores:adamantite_boots'
      }
    },
    {
      setName: 'JOres Viridium',
      output: 'ores:viridium_ingot',
      inputs: {
        helmet: 'ores:viridium_helmet',
        chestplate: 'ores:viridium_chestplate',
        leggings: 'ores:viridium_leggings',
        boots: 'ores:viridium_boots'
      }
    },
    {
      setName: 'JOres Lunarium',
      output: 'ores:lunarium_ingot',
      inputs: {
        helmet: 'ores:lunarium_helmet',
        chestplate: 'ores:lunarium_chestplate',
        leggings: 'ores:lunarium_leggings',
        boots: 'ores:lunarium_boots'
      }
    },
    {
      setName: 'JOres Solarium',
      output: 'ores:solarium_ingot',
      inputs: {
        helmet: 'ores:solarium_helmet',
        chestplate: 'ores:solarium_chestplate',
        leggings: 'ores:solarium_leggings',
        boots: 'ores:solarium_boots'
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
          CreateItem.of('create:experience_nugget', XP_NUGGET_CHANCE),
          CreateItem.of('2x create:experience_nugget', XP_NUGGET_CHANCE)
        ],
        [inputId]
      )
    })
  })
})
