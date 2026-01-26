ServerEvents.recipes(event => {
    event.recipes.create.crushing(
        Item.of('minecraft:netherite_scrap', 2),
        'minecraft:ancient_debris')
})