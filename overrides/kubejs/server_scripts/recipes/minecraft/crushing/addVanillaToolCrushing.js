ServerEvents.recipes(event => {
  // Yields per tool type (tweak to taste)
  const toolYields = {
    sword: 1,
    shovel: 1,
    hoe: 1,
    axe: 2,
    pickaxe: 2
  }

  // Define XP nugget output chance
  const XP_NUGGET_CHANCE = 0.25

  // Master list: explicit item IDs per tool type
  const toolSets = [
    {
      setName: 'Vanilla Iron Tools',
      output: 'minecraft:iron_ingot',
      inputs: {
        sword: 'minecraft:iron_sword',
        pickaxe: 'minecraft:iron_pickaxe',
        axe: 'minecraft:iron_axe',
        shovel: 'minecraft:iron_shovel',
        hoe: 'minecraft:iron_hoe'
      }
    },
    {
      setName: 'Vanilla Gold Tools',
      output: 'minecraft:gold_ingot',
      inputs: {
        sword: 'minecraft:golden_sword',
        pickaxe: 'minecraft:golden_pickaxe',
        axe: 'minecraft:golden_axe',
        shovel: 'minecraft:golden_shovel',
        hoe: 'minecraft:golden_hoe'
      }
    },
    {
      setName: 'Vanilla Diamond Tools',
      output: 'minecraft:diamond',
      inputs: {
        sword: 'minecraft:diamond_sword',
        pickaxe: 'minecraft:diamond_pickaxe',
        axe: 'minecraft:diamond_axe',
        shovel: 'minecraft:diamond_shovel',
        hoe: 'minecraft:diamond_hoe'
      }
    },
    {
      setName: 'Vanilla Netherite Tools',
      output: 'minecraft:netherite_scrap',
      inputs: {
        sword: 'minecraft:netherite_sword',
        pickaxe: 'minecraft:netherite_pickaxe',
        axe: 'minecraft:netherite_axe',
        shovel: 'minecraft:netherite_shovel',
        hoe: 'minecraft:netherite_hoe'
      }
    }
  ]

  // Tool Crushing Generator
  toolSets.forEach(set => {
    Object.entries(set.inputs).forEach(([toolType, inputId]) => {
      const count = toolYields[toolType] ?? 1

      event.recipes.create.crushing(
        [
          Item.of(set.output, count),

          CreateItem.of('create:experience_nugget', XP_NUGGET_CHANCE),
          CreateItem.of('2x create:experience_nugget', XP_NUGGET_CHANCE * 0.4)
        ],
        [inputId]
      )
    })
  })
})
