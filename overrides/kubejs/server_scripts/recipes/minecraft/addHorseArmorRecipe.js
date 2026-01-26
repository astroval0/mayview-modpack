ServerEvents.recipes(event => {
    // Add recipe for crafting Horse armor in tiers
    // Iron Horse Armor Recipe
    event.shapeless(
        Item.of('minecraft:iron_horse_armor', 1),
        [
            'minecraft:leather_horse_armor',
            'minecraft:iron_ingot',
            'minecraft:iron_ingot',
            'minecraft:iron_ingot',
            'minecraft:iron_ingot'
        ]
    )

    // Golden Horse Armor Recipe
    event.shapeless(
        Item.of('minecraft:golden_horse_armor', 1),
        [
            'minecraft:iron_horse_armor',
            'minecraft:gold_ingot',
            'minecraft:gold_ingot',
            'minecraft:gold_ingot',
            'minecraft:gold_ingot'
        ]
    )

    // Diamond Horse Armor Recipe
    event.shapeless(
        Item.of('minecraft:diamond_horse_armor', 1),
        [
            'minecraft:golden_horse_armor',
            'minecraft:diamond',
            'minecraft:diamond',
            'minecraft:diamond',
            'minecraft:diamond'
        ]
    )
})