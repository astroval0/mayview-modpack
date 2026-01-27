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
      setName: 'JOres Copper',
      output: 'minecraft:copper_ingot',
      inputs: {
        sword: 'ores:copper_sword',
        pickaxe: 'ores:copper_pickaxe',
        axe: 'ores:copper_axe',
        shovel: 'ores:copper_shovel',
        hoe: 'ores:copper_hoe'
      }
    },
    {
      setName: 'JOres Cobalt',
      output: 'ores:cobalt_ingot',
      inputs: {
        sword: 'ores:cobalt_sword',
        pickaxe: 'ores:cobalt_pickaxe',
        axe: 'ores:cobalt_axe',
        shovel: 'ores:cobalt_shovel',
        hoe: 'ores:cobalt_hoe'
      }
    },
    {
      setName: 'JOres Magnite',
      output: 'ores:magnite_ingot',
      inputs: {
        sword: 'ores:magnite_sword',
        pickaxe: 'ores:magnite_pickaxe',
        axe: 'ores:magnite_axe',
        shovel: 'ores:magnite_shovel',
        hoe: 'ores:magnite_hoe'
      }
    },
    {
      setName: 'JOres Mythril',
      output: 'ores:mythril_ingot',
      inputs: {
        sword: 'ores:mythril_sword',
        pickaxe: 'ores:mythril_pickaxe',
        axe: 'ores:mythril_axe',
        shovel: 'ores:mythril_shovel',
        hoe: 'ores:mythril_hoe'
      }
    },
    {
      setName: 'JOres Orichalcum',
      output: 'ores:orichalcum_ingot',
      inputs: {
        sword: 'ores:orichalcum_sword',
        pickaxe: 'ores:orichalcum_pickaxe',
        axe: 'ores:orichalcum_axe',
        shovel: 'ores:orichalcum_shovel',
        hoe: 'ores:orichalcum_hoe'
      }
    },
    {
      setName: 'JOres Adamantite',
      output: 'ores:adamantite_ingot',
      inputs: {
        sword: 'ores:adamantite_sword',
        pickaxe: 'ores:adamantite_pickaxe',
        axe: 'ores:adamantite_axe',
        shovel: 'ores:adamantite_shovel',
        hoe: 'ores:adamantite_hoe'
      }
    },
    {
      setName: 'JOres Viridium',
      output: 'ores:viridium_ingot',
      inputs: {
        sword: 'ores:viridium_sword',
        pickaxe: 'ores:viridium_pickaxe',
        axe: 'ores:viridium_axe',
        shovel: 'ores:viridium_shovel',
        hoe: 'ores:viridium_hoe'
      }
    },
    {
      setName: 'JOres Celestium',
      output: 'ores:lunarium_ingot',
      inputs: {
        sword: 'ores:celestium_sword',
        pickaxe: 'ores:celestium_pickaxe',
        axe: 'ores:celestium_axe',
        shovel: 'ores:celestium_shovel',
        hoe: 'ores:celestium_hoe'
      }
    },
    {
      setName: 'JOres Geovar',
      output: 'ores:geovar_ingot',
      inputs: {
        pickaxe: 'ores:geovar_pickaxe'
      }
    },
    {
      setName: 'JOres Florite',
      output: 'ores:florite_ingot',
      inputs: {
        pickaxe: 'ores:florite_hoe'
      }
    },
    {
      setName: 'JOres Swiftite',
      output: 'ores:swiftite_ingot',
      inputs: {
        pickaxe: 'ores:swiftite_shovel'
      }
    },
    {
      setName: 'JOres Necronium',
      output: 'ores:necronium_ingot',
      inputs: {
        pickaxe: 'ores:necronium_sword'
      }
    },
    {
      setName: 'JOres Petrafite',
      output: 'ores:petrafite_ingot',
      inputs: {
        pickaxe: 'ores:petrafite_axe'
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
