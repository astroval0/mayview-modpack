// kubejs/server_scripts/recipes/cobblemon/cutting/addCobblemonLogCutting.js
console.info('[Mayview] Cobblemon log cutting recipes loaded')

ServerEvents.recipes(event => {
  if (!global.Mayview || !global.Mayview.cutting || !global.Mayview.cutting.registerStrippingSet) {
    console.error('[Mayview] cutting_helpers not available! (startup script failed or not loaded)')
    return
  }

  global.Mayview.cutting.registerStrippingSet(event, {
    pairs: [
      { input: 'cobblemon:apricorn_log',    stripped: 'cobblemon:stripped_apricorn_log' },
      { input: 'cobblemon:apricorn_wood',   stripped: 'cobblemon:stripped_apricorn_wood' },
      { input: 'cobblemon:saccharine_log',  stripped: 'cobblemon:stripped_saccharine_log' },
      { input: 'cobblemon:saccharine_wood', stripped: 'cobblemon:stripped_saccharine_wood' }
    ],

    // optional knobs:
    // barkChance: 0.25, // makes bark chance-based instead of guaranteed
    // barkCount: 1,
    // idPrefix: 'mayview:cutting/strip/',
    // debug: true
  })
})
