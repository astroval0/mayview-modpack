ServerEvents.recipes(event => {
    // Create milling
    event.recipes.create.milling(
    '12x minecraft:gold_nugget', 
    'minecraft:golden_horse_armor'
    )

    // Farm and Charm mincing
    event.custom({
        type: "farm_and_charm:mincer",
        ingredient:
            { item: "minecraft:golden_horse_armor"},
        recipe_type: "METAL",
        result:
            { id: "minecraft:gold_nugget", count: 12}
    })
})
