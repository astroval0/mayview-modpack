// kubejs/startup_scripts/mayview/lib/crushing_helpers.js
console.info('[Mayview] crushing_helpers.js loaded')

global.Mayview = global.Mayview || {}
global.Mayview.crushing = global.Mayview.crushing || {}

// ------------------------------------------------------------
// registerSet(event, cfg)
// ------------------------------------------------------------
global.Mayview.crushing.registerSet = function (event, cfg) {
  // Required
  var material = cfg.material
  var output = cfg.output
  var toolTypes = cfg.toolTypes
  var yields = cfg.yields
  var builder = cfg.builder

  // Optional
  var yieldOverride = (cfg.yieldOverride !== undefined) ? cfg.yieldOverride : null
  var xpChance = (cfg.xpChance !== undefined) ? cfg.xpChance : 0.25
  var xp2Multiplier = (cfg.xp2Multiplier !== undefined) ? cfg.xp2Multiplier : 2
  var xp2Factor = (cfg.xp2Factor !== undefined) ? cfg.xp2Factor : 0.4
  var debug = (cfg.debug !== undefined) ? cfg.debug : false

  if (!material || !output || !toolTypes || !yields || !builder) {
    throw new Error('[Mayview.crushing] Missing required config fields for material=' + material)
  }

  toolTypes.forEach(function (toolType) {
    var inputId = builder(material, toolType)

    if (!Item.exists(inputId)) {
      if (debug) console.info('[Mayview.crushing] skip (missing item): ' + inputId)
      return
    }

    var count
    if (yieldOverride !== null && yieldOverride !== undefined) {
      count = yieldOverride
    } else {
      // Rhino-safe fallback instead of ?? 1
      count = (yields[toolType] !== undefined) ? yields[toolType] : 1
    }

    event.recipes.create.crushing(
      [
        Item.of(output, count),
        CreateItem.of('create:experience_nugget', xpChance),
        CreateItem.of(String(xp2Multiplier) + 'x create:experience_nugget', xpChance * xp2Factor)
      ],
      [inputId]
    )

    if (debug) console.info('[Mayview.crushing] add: ' + inputId + ' -> ' + output + ' x' + count)
  })
}

// ------------------------------------------------------------
// registerEntries(event, cfg)
// ------------------------------------------------------------
global.Mayview.crushing.registerEntries = function (event, cfg) {
  var entries = cfg.entries
  var xpChance = (cfg.xpChance !== undefined) ? cfg.xpChance : 0.25
  var xp2Multiplier = (cfg.xp2Multiplier !== undefined) ? cfg.xp2Multiplier : 2
  var xp2Factor = (cfg.xp2Factor !== undefined) ? cfg.xp2Factor : 0.4
  var debug = (cfg.debug !== undefined) ? cfg.debug : false

  if (!entries || !Array.isArray(entries)) {
    throw new Error('[Mayview.crushing] registerEntries requires entries: []')
  }

  entries.forEach(function (e) {
    var inputId = e.input
    var outputId = e.output
    var count = (e.count !== undefined) ? e.count : 1

    var entryXp = (e.xpChance !== undefined) ? e.xpChance : xpChance
    var entryXp2Factor = (e.xp2Factor !== undefined) ? e.xp2Factor : xp2Factor

    if (!Item.exists(inputId)) {
      if (debug) console.info('[Mayview.crushing] skip (missing item): ' + inputId)
      return
    }

    event.recipes.create.crushing(
      [
        Item.of(outputId, count),
        CreateItem.of('create:experience_nugget', entryXp),
        CreateItem.of(String(xp2Multiplier) + 'x create:experience_nugget', entryXp * entryXp2Factor)
      ],
      [inputId]
    )

    if (debug) console.info('[Mayview.crushing] add: ' + inputId + ' -> ' + outputId + ' x' + count)
  })
}
