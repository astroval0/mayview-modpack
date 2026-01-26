ServerEvents.recipes(event => {
    event.shapeless('cobblemon:prism_scale', [
        'minecraft:prismarine_shard',
        'minecraft:prismarine_crystals',
        'minecraft:heart_of_the_sea',
        Item.of('cobblemon:pink_apricorn', 1),
        Item.of('cobblemon:blue_apricorn', 1),
    ])
})