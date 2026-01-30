ServerEvents.recipes(event => {
  // ------------------------------------------------
  //  Simply Swords Crushing Config
  //  Vanilla Minecraft Material Crafted Weapons
  // ------------------------------------------------

  // yields per weapon class
  const toolYields = {
    longsword: 1,
    twinblade: 1,
    rapier: 1,
    katana: 1,
    sai: 1,
    spear: 1,
    glaive: 1,
    warglaive: 1,
    cutlass: 1,
    claymore: 2,
    greathammer: 2,
    greataxe: 2,
    chakram: 2,
    scythe: 2,
    halberd: 2
  }

  const XP_NUGGET_CHANCE = 0.25

  // material sets
  const toolSets = [
    { setName: 'iron',      output: 'minecraft:iron_ingot' },
    { setName: 'gold',      output: 'minecraft:gold_ingot' },
    { setName: 'diamond',   output: 'minecraft:diamond' },
    { setName: 'netherite', output: 'minecraft:netherite_scrap' },
    { setName: 'runic',     output: 'simplyswords:runic_tablet', yieldOverride: 1 }
  ]

  // Simply Swords naming pattern:
  // simplyswords:iron_longsword, simplyswords:gold_glaive, etc.
  const makeSimplySwordsId = (material, toolType) => `simplyswords:${material}_${toolType}`

  const builders = [
    { mod: 'SimplySwords', makeId: makeSimplySwordsId }
  ]

  // -------------------------
  // Generator
  // -------------------------

  toolSets.forEach(set => {
    const material = set.setName

    Object.keys(toolYields).forEach(toolType => {
      const count = (set.yieldOverride ?? toolYields[toolType] ?? 1)

      builders.forEach(b => {
        const inputId = b.makeId(material, toolType)

        // Safety: don't error if an item doesn't exist
        if (!Item.exists(inputId)) return

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
})
