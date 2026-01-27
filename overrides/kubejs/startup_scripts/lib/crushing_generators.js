// kubejs/startup_scripts/mayview/armor_crush_gen.js
// ignored: true

global.MV_CrushGen = global.MV_CrushGen || {}

global.MV_CrushGen.addArmorCrushingRecipes = (event, armorSets, options = {}) => {
  const armorYields = options.armorYields || {
    helmet: 2,
    chestplate: 3,
    leggings: 3,
    boots: 1
  }

  const xpChanceBySlot = options.xpChanceBySlot ?? null

  armorSets.forEach(set => {
    Object.entries(set.inputs).forEach(([slot, inputId]) => {
      const outputCount = armorYields[slot] ?? 1

      // 🔧 BUG FIX: this must be "results", not "outputItem"
      const results = [Item.of(set.output, outputCount)]

      if (xpChanceBySlot && typeof CreateItem !== 'undefined') {
        const baseXpChance = xpChanceBySlot[slot] ?? 0

        if (baseXpChance > 0) {
          results.push(CreateItem.of('create:experience_nugget', baseXpChance))
          results.push(CreateItem.of('2x create:experience_nugget', baseXpChance * 0.4))
        }
      }

      event.recipes.create.crushing(results, [inputId])
    })
  })
}
