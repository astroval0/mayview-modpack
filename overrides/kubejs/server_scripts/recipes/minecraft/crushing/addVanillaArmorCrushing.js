// kubejs/server_scripts/recipes/minecraft/crushing/addVanillaArmorCrushing.js
console.info('[Mayview] Vanilla armor crushing loaded')

ServerEvents.recipes(event => {
  if (!global.Mayview || !global.Mayview.crushing || !global.Mayview.crushing.registerEntries) {
    console.error('[Mayview] crushing_helpers not available! (startup script failed or not loaded)')
    return
  }

  // yields per armor slot
  const armorYields = {
    helmet: 2,
    chestplate: 3,
    leggings: 3,
    boots: 1
  }
  
  // Define XP nugget output chance
  const XP_CHANCE = 0.15

  const armorSets = [
    { material: 'chainmail', output: 'minecraft:iron_ingot' },
    { material: 'iron',      output: 'minecraft:iron_ingot' },
    { material: 'golden',    output: 'minecraft:gold_ingot' },
    { material: 'diamond',   output: 'minecraft:diamond' },
    { material: 'netherite', output: 'minecraft:netherite_scrap' }
  ]

  const slots = ['helmet', 'chestplate', 'leggings', 'boots']

  // Build "entries" for registerEntries
  const entries = []

  armorSets.forEach(set => {
    slots.forEach(slot => {
      const inputId = `minecraft:${set.material}_${slot}`
      const count = (armorYields[slot] !== undefined) ? armorYields[slot] : 1

      entries.push({
        input: inputId,
        output: set.output,
        count: count
      })
    })
  })

  global.Mayview.crushing.registerEntries(event, {
    entries: entries,
    xpChance: XP_CHANCE,
    xp2Factor: 0.25,
    // debug: true
  })
})
