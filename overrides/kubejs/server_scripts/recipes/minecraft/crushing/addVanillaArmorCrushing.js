ServerEvents.recipes(event => {
  // Define yields per armor slot
  const armorYields = {
    helmet: 2,
    chestplate: 3,
    leggings: 3,
    boots: 1
  }

  // Define XP nugget output chance
  const XP_NUGGET_CHANCE = 0.25   // 25% chance
  
  // Master list: explicit item IDs per slot
  const armorSets = [
    {
      setName: 'Vanilla Chainmail',
      output: 'minecraft:iron_ingot',
      inputs: {
        helmet: 'minecraft:chainmail_helmet',
        chestplate: 'minecraft:chainmail_chestplate',
        leggings: 'minecraft:chainmail_leggings',
        boots: 'minecraft:chainmail_boots'
      }
    },
    {
      setName: 'Vanilla Iron',
      output: 'minecraft:iron_ingot',
      inputs: {
        helmet: 'minecraft:iron_helmet',
        chestplate: 'minecraft:iron_chestplate',
        leggings: 'minecraft:iron_leggings',
        boots: 'minecraft:iron_boots'
      }
    },
    {
      setName: 'Vanilla Gold',
      output: 'minecraft:gold_ingot',
      inputs: {
        helmet: 'minecraft:golden_helmet',
        chestplate: 'minecraft:golden_chestplate',
        leggings: 'minecraft:golden_leggings',
        boots: 'minecraft:golden_boots'
      }
    },
    {
      setName: 'Vanilla Diamond',
      output: 'minecraft:diamond',
      inputs: {
        helmet: 'minecraft:diamond_helmet',
        chestplate: 'minecraft:diamond_chestplate',
        leggings: 'minecraft:diamond_leggings',
        boots: 'minecraft:diamond_boots'
      }
    },
    {
      setName: 'Vanilla Netherite',
      output: 'minecraft:netherite_scrap',
      inputs: {
        helmet: 'minecraft:netherite_helmet',
        chestplate: 'minecraft:netherite_chestplate',
        leggings: 'minecraft:netherite_leggings',
        boots: 'minecraft:netherite_boots'
      }
    },
  ]

  // Armor Crushing Generator
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