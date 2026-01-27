// -------------------------
// =-----= Type Gems =-----=
// -------------------------
ServerEvents.recipes(event => {

  // One list to rule them all
  const GEM_TYPES = [
    'fire',
    'water',
    'grass',
    'electric',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy'
  ]

  // Helper: normal gem + 4x (type tera shard) => type gem
  function typegemrecipe(type) {
    event.shaped(`cobblemon:${type}_gem`, [
      ' T ',
      'TAT',
      ' T '
    ], {
      A: 'cobblemon:normal_gem',
      T: `mega_showdown:${type}_tera_shard`
    })
  }

  // Generate all type gem recipes
  GEM_TYPES.forEach(type => typegemrecipe(type))

  // Build gem id arrays from the same type list
  const notnormalgems = GEM_TYPES.map(type => `cobblemon:${type}_gem`)
  const allCobblemonGemTypes = notnormalgems.concat(['cobblemon:normal_gem'])
  const allGemTypes = GEM_TYPES.concat(['normal'])

  // Any non-normal gem + 4x normal tera shard => normal gem
  event.shaped(Item.of('cobblemon:normal_gem', 1), [
    ' T ',
    'TAT',
    ' T '
  ], {
    A: Ingredient.of(notnormalgems),
    T: 'mega_showdown:normal_tera_shard'
  })

  // Duplication: gem + quartz + stellar shard => 2 gems
  allCobblemonGemTypes.forEach(gemId => {
    event.shapeless(Item.of(gemId, 2), [
      gemId,
      'minecraft:quartz',
      'mega_showdown:stellar_tera_shard'
    ])
  })

  // Gem to shard: gem => 4x corresponding tera shard
  allGemTypes.forEach(gemName => {
    event.shapeless(Item.of(`mega_showdown:${gemName}_tera_shard`, 4), [
      `cobblemon:${gemName}_gem`
    ])
  })
})