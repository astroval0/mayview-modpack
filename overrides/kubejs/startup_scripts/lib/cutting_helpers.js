// kubejs/startup_scripts/mayview/lib/cutting_helpers.js
console.info('[Mayview] cutting_helpers.js loaded')

global.Mayview = global.Mayview || {}
global.Mayview.cutting = global.Mayview.cutting || {}

/**
 * registerEntries(event, cfg)
 * cfg = {
 *   entries: [
 *     { input, tool, results, sound }
 *   ]
 * }
 *
 * entry fields:
 * - input: item id string OR ingredient object ({item:'x'} or {tag:'y'})
 * - tool: ingredient object, typically { tag: 'minecraft:axes' }
 * - results: array of result objects:
 *     { item:'mod:thing', count:1, chance?:0.25 }
 * - sound: optional sound id string
 * - id: optional recipe id string
 */
global.Mayview.cutting.registerEntries = function (event, cfg) {
  var entries = cfg.entries
  var debug = (cfg.debug !== undefined) ? cfg.debug : false

  if (!entries || !Array.isArray(entries)) {
    throw new Error('[Mayview.cutting] registerEntries requires entries: []')
  }

  entries.forEach(function (e) {
    var input = e.input
    var tool = e.tool
    var results = e.results
    var sound = e.sound
    var id = e.id

    if (!input || !tool || !results) {
      throw new Error('[Mayview.cutting] entry missing input/tool/results')
    }

    // Normalize input into an ingredient object for Farmers Delight
    var ingredientObj
    if (typeof input === 'string') {
      if (!Item.exists(input)) {
        if (debug) console.info('[Mayview.cutting] skip (missing item): ' + input)
        return
      }
      ingredientObj = { item: input }
    } else {
      // object ingredient: {item:'...'} or {tag:'...'}
      ingredientObj = input
    }

    var normalizedResults = []

    results.forEach(function (r) {
        // Accept { item:'mod:id', count:1, chance?:0.25 }
        // or already normalized { item:{id:'mod:id'}, count:1, chance:0.25 }
        var itemObj = r.item
        if (typeof itemObj === 'string') {
            itemObj = { id: itemObj }
        }

        var out = {
            item: itemObj,
            count: (r.count !== undefined) ? r.count : 1,
            chance: (r.chance !== undefined) ? r.chance : 1.0
        }

        if (typeof r !== 'object' || r === null || r.item === undefined) {
            throw new Error('[Mayview.cutting] bad result entry: ' + JSON.stringify(r))
        }

        normalizedResults.push(out)
    })

    var recipeJson = {
        type: 'farmersdelight:cutting',
        ingredients: [ingredientObj],
        tool: tool,
        result: normalizedResults
    }

    if (sound) {
        recipeJson.sound = (typeof sound === 'string') ? { sound_id: sound } : sound
    }   

    var built = event.custom(recipeJson)
    if (id) built.id(id)

    if (debug) console.info('[Mayview.cutting] add cutting for: ' + (typeof input === 'string' ? input : JSON.stringify(input)))
  })
}

/**
 * registerStrippingSet(event, cfg)
 * cfg = {
 *   pairs: [{ input:'mod:log', stripped:'mod:stripped_log' }, ...]
 *   tool: { tag:'minecraft:axes' } (optional)
 *   barkItem: 'farmersdelight:tree_bark' (optional)
 *   barkCount: 1 (optional)
 *   barkChance: null or number (optional)  // if set, bark becomes chance-based
 *   sound: 'minecraft:item.axe.strip' (optional)
 *   idPrefix: 'mayview:cutting/strip/' (optional)
 * }
 */
global.Mayview.cutting.registerStrippingSet = function (event, cfg) {
  var pairs = cfg.pairs
  var tool = cfg.tool || { tag: 'minecraft:axes' }
  var barkItem = cfg.barkItem || 'farmersdelight:tree_bark'
  var barkCount = (cfg.barkCount !== undefined) ? cfg.barkCount : 1
  var barkChance = (cfg.barkChance !== undefined) ? cfg.barkChance : null
  var sound = (cfg.sound !== undefined) ? cfg.sound : 'minecraft:item.axe.strip'
  var idPrefix = (cfg.idPrefix !== undefined) ? cfg.idPrefix : null
  var debug = (cfg.debug !== undefined) ? cfg.debug : false

  if (!pairs || !Array.isArray(pairs)) {
    throw new Error('[Mayview.cutting] registerStrippingSet requires pairs: []')
  }

  var entries = []

  pairs.forEach(function (p) {
    var input = p.input
    var stripped = p.stripped

    if (!Item.exists(input) || !Item.exists(stripped)) {
      if (debug) console.info('[Mayview.cutting] skip (missing item): ' + input + ' -> ' + stripped)
      return
    }

    // Build results list
    var results = [{ item: stripped, count: 1 }]

    if (Item.exists(barkItem)) {
      var barkRes = { item: barkItem, count: barkCount }
      if (barkChance !== null && barkChance !== undefined) barkRes.chance = barkChance
      results.push(barkRes)
    }

    var entry = {
      input: input,
      tool: tool,
      results: results,
      sound: sound
    }

    if (idPrefix) {
      var key = String(input).replace(':', '_')
      entry.id = idPrefix + key
    }

    entries.push(entry)
  })

  global.Mayview.cutting.registerEntries(event, { entries: entries, debug: debug })
}

// -----------------------------------------------------------------------------
// Create: Manual Item Application helpers
// Shows in JEI as "Manual Item Application" (like your screenshot)
// Recipe type: create:item_application
// -----------------------------------------------------------------------------

global.Mayview.cutting.create = global.Mayview.cutting.create || {}

/**
 * registerItemApplicationEntries(event, cfg)
 * cfg = {
 *   entries: [
 *     { base, addition, result, id }
 *   ],
 *   idPrefix: 'mayview:create/item_application/' (optional)
 *   debug: false (optional)
 * }
 *
 * entry fields:
 * - base: item id string OR ingredient object ({item:'x'} or {tag:'y'})
 * - addition: item id string OR ingredient object ({item:'x'} or {tag:'y'})
 * - result: item id string OR result object (Item.of(...)) — but strings are simplest
 * - id: optional explicit recipe id
 */
global.Mayview.cutting.create.registerItemApplicationEntries = function (event, cfg) {
  var entries = cfg.entries
  var idPrefix = (cfg.idPrefix !== undefined) ? cfg.idPrefix : null
  var debug = (cfg.debug !== undefined) ? cfg.debug : false

  if (!entries || !Array.isArray(entries)) {
    throw new Error('[Mayview.cutting.create] registerItemApplicationEntries requires entries: []')
  }

  entries.forEach(function (e) {
    var base = e.base
    var addition = e.addition
    var result = e.result
    var id = e.id

    if (!base || !addition || !result) {
      throw new Error('[Mayview.cutting.create] entry missing base/addition/result')
    }

    // Validate strings if possible (skip missing items; tags are fine)
    function validateMaybeItem(x) {
      if (typeof x !== 'string') return true
      if (x.startsWith('#')) return true
      return Item.exists(x)
    }

    if (!validateMaybeItem(base) || !validateMaybeItem(addition) || (typeof result === 'string' && !Item.exists(result))) {
      if (debug) console.info('[Mayview.cutting.create] skip (missing item): ' + JSON.stringify(e))
      return
    }

    // KubeJS Create wrapper:
    // itemApplication(result, [base, addition])
    var built = event.recipes.create.itemApplication(result, [base, addition])

    // IDs
    if (id) {
      built.id(id)
    } else if (idPrefix) {
      // Make a stable key (best effort)
      var baseKey = String(base).replace('#', 'tag_').replace(':', '_').replace('/', '_')
      var addKey = String(addition).replace('#', 'tag_').replace(':', '_').replace('/', '_')
      built.id(idPrefix + baseKey + '__' + addKey)
    }

    if (debug) console.info('[Mayview.cutting.create] add item_application: ' + JSON.stringify(e))
  })
}

/**
 * registerCreateStrippingSet(event, cfg)
 * cfg = {
 *   pairs: [{ input:'mod:log', stripped:'mod:stripped_log' }, ...]
 *   tool: '#minecraft:axes' or {tag:'minecraft:axes'} (optional; defaults to '#minecraft:axes')
 *   idPrefix: 'mayview:create/strip/' (optional)
 *   debug: false (optional)
 * }
 *
 * Note: This is Create item_application, not Farmers Delight cutting.
 * It will show as "Manual Item Application".
 */
global.Mayview.cutting.create.registerCreateStrippingSet = function (event, cfg) {
  var pairs = cfg.pairs
  var tool = (cfg.tool !== undefined) ? cfg.tool : '#minecraft:axes'
  var idPrefix = (cfg.idPrefix !== undefined) ? cfg.idPrefix : null
  var debug = (cfg.debug !== undefined) ? cfg.debug : false

  if (!pairs || !Array.isArray(pairs)) {
    throw new Error('[Mayview.cutting.create] registerCreateStrippingSet requires pairs: []')
  }

  var entries = []

  pairs.forEach(function (p) {
    var input = p.input
    var stripped = p.stripped

    if (!Item.exists(input) || !Item.exists(stripped)) {
      if (debug) console.info('[Mayview.cutting.create] skip (missing item): ' + input + ' -> ' + stripped)
      return
    }

    entries.push({
      base: input,
      addition: tool, // '#minecraft:axes' recommended
      result: stripped
    })
  })

  global.Mayview.cutting.create.registerItemApplicationEntries(event, {
    entries: entries,
    idPrefix: idPrefix,
    debug: debug
  })
}

/**
 * registerStrippingCombo(event, cfg)
 * Adds BOTH:
 * - Farmers Delight cutting (cutting board)
 * - Create item_application (Manual Item Application)
 *
 * cfg = {
 *   pairs: [{ input:'mod:log', stripped:'mod:stripped_log' }, ...]
 *
 *   // FD cutting options
 *   fdTool: { tag:'minecraft:axes' } (optional)
 *   barkItem: 'farmersdelight:tree_bark' (optional)
 *   barkCount: 1 (optional)
 *   barkChance: null or number (optional)
 *   fdSound: 'minecraft:item.axe.strip' (optional)
 *   fdIdPrefix: 'mayview:cutting/strip/' (optional)
 *
 *   // Create item_application options
 *   createTool: '#minecraft:axes' (optional)
 *   createIdPrefix: 'mayview:create/strip/' (optional)
 *
 *   // toggles
 *   enableFD: true (optional)
 *   enableCreate: true (optional)
 *
 *   debug: false (optional)
 * }
 */
global.Mayview.cutting.registerStrippingCombo = function (event, cfg) {
  var pairs = cfg.pairs
  var debug = (cfg.debug !== undefined) ? cfg.debug : false

  var enableFD = (cfg.enableFD !== undefined) ? cfg.enableFD : true
  var enableCreate = (cfg.enableCreate !== undefined) ? cfg.enableCreate : true

  if (!pairs || !Array.isArray(pairs)) {
    throw new Error('[Mayview.cutting] registerStrippingCombo requires pairs: []')
  }

  // Farmers Delight cutting board stripping
  if (enableFD) {
    global.Mayview.cutting.registerStrippingSet(event, {
      pairs: pairs,
      tool: cfg.fdTool || { tag: 'minecraft:axes' },
      barkItem: cfg.barkItem || 'farmersdelight:tree_bark',
      barkCount: (cfg.barkCount !== undefined) ? cfg.barkCount : 1,
      barkChance: (cfg.barkChance !== undefined) ? cfg.barkChance : null,
      sound: (cfg.fdSound !== undefined) ? cfg.fdSound : 'minecraft:item.axe.strip',
      idPrefix: (cfg.fdIdPrefix !== undefined) ? cfg.fdIdPrefix : null,
      debug: debug
    })
  }

  // Create manual application stripping
  if (enableCreate) {
    // Ensure the create namespace exists even if file load order is weird
    global.Mayview.cutting.create = global.Mayview.cutting.create || {}

    if (!global.Mayview.cutting.create.registerCreateStrippingSet) {
      throw new Error('[Mayview.cutting] Create helper missing. Did create helpers load before combo?')
    }

    global.Mayview.cutting.create.registerCreateStrippingSet(event, {
      pairs: pairs,
      tool: (cfg.createTool !== undefined) ? cfg.createTool : '#minecraft:axes',
      idPrefix: (cfg.createIdPrefix !== undefined) ? cfg.createIdPrefix : null,
      debug: debug
    })
  }

  if (debug) console.info('[Mayview.cutting] registerStrippingCombo added: FD=' + enableFD + ', Create=' + enableCreate)
}
