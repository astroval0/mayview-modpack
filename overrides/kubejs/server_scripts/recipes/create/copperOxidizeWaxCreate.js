// ----------------------------------------
// =-----= Copper Age and Wax Salon =-----=
// ----------------------------------------
ServerEvents.recipes(event => {
  const WATER_MB = 250

  const stagePrefixes = ['', 'exposed_', 'weathered_', 'oxidized_']
  const waxPrefixes   = ['waxed_', 'waxed_exposed_', 'waxed_weathered_', 'waxed_oxidized_']

  const idsFor = (ns, basePath, prefixes) => prefixes.map(p => `${ns}:${p}${basePath}`)

  const addOxidize = (from, to) => {
    event.recipes.create.filling(to, [
      from,
      Fluid.of('minecraft:water', WATER_MB)
    ]).id(`mayview:copper_oxidize/${from.replace(':','_')}_to_${to.replace(':','_')}`)
  }

  const addWax = (from, to) => {
    event.recipes.create.deploying(to, [
      from,
      'minecraft:honeycomb'
    ]).id(`mayview:copper_wax/${from.replace(':','_')}_to_${to.replace(':','_')}`)
  }

  const addFamily = (stages, waxedStages) => {
    addOxidize(stages[0], stages[1])
    addOxidize(stages[1], stages[2])
    addOxidize(stages[2], stages[3])

    addWax(stages[0], waxedStages[0])
    addWax(stages[1], waxedStages[1])
    addWax(stages[2], waxedStages[2])
    addWax(stages[3], waxedStages[3])
  }

  // -----------------------------
  // Vanilla: copper_block is special 
  // -----------------------------
  addFamily(
    [
      'minecraft:copper_block',
      'minecraft:exposed_copper',
      'minecraft:weathered_copper',
      'minecraft:oxidized_copper'
    ],
    [
      'minecraft:waxed_copper_block',
      'minecraft:waxed_exposed_copper',
      'minecraft:waxed_weathered_copper',
      'minecraft:waxed_oxidized_copper'
    ]
  )

  // -----------------------------
  // Vanilla: the other 8 auto-generate fine
  // -----------------------------
  const VANILLA_BASE_PATHS = [
    'chiseled_copper',
    'copper_grate',
    'cut_copper',
    'cut_copper_stairs',
    'cut_copper_slab',
    'copper_door',
    'copper_trapdoor',
    'copper_bulb',
  ]

  VANILLA_BASE_PATHS.forEach(basePath => {
    const stages = idsFor('minecraft', basePath, stagePrefixes)
    const waxedStages = idsFor('minecraft', basePath, waxPrefixes)
    addFamily(stages, waxedStages)
  })

  // -----------------------------
  // Create: 6 groups of decorative blocks, 
  // all with the same oxidation/waxing stages
  // -----------------------------
  const CREATEMOD_BASE_PATHS = [
    'copper_shingles',
    'copper_shingle_slab',
    'copper_shingle_stairs',
    'copper_tiles',
    'copper_tile_slab',
    'copper_tile_stairs',
  ]

  CREATEMOD_BASE_PATHS.forEach(basePath => {
    const stages = idsFor('create', basePath, stagePrefixes)
    const waxedStages = idsFor('create', basePath, waxPrefixes)
    addFamily(stages, waxedStages)
  })
})
