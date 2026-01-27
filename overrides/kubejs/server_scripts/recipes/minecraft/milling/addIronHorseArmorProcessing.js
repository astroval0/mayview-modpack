ServerEvents.recipes(event => {
    // Create milling
    event.recipes.create.milling(
        '12x minecraft:iron_nugget', 
        'minecraft:iron_horse_armor'
    )
    // Farm and Charm mincing
    event.custom({
        type: "farm_and_charm:mincer",
        ingredient:
            { item: "minecraft:iron_horse_armor"},
        recipe_type: "METAL",
        result:
            { id: "minecraft:iron_nugget", count: 12}
    })
})