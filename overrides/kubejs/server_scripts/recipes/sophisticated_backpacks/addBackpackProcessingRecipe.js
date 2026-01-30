ServerEvents.recipes(event => {
    event.recipes.create.crushing(
        [
          Item.of('minecraft:leather', 2),
          CreateItem.of('create:experience_nugget', 0.33),
          CreateItem.of('2x create:experience_nugget', 0.25)
        ],
        ['sophisticatedbackpacks:backpack']
    )

    event.recipes.create.crushing(
        [
          Item.of('minecraft:leather', 2),
          Item.of('minecraft:copper_ingot', 4),
          CreateItem.of('create:experience_nugget', 0.33),
          CreateItem.of('2x create:experience_nugget', 0.25)
        ],
        ['sophisticatedbackpacks:copper_backpack']
    )

    event.recipes.create.crushing(
        [
          Item.of('minecraft:leather', 2),
          Item.of('minecraft:iron_ingot', 2),
          CreateItem.of('create:experience_nugget', 0.33),
          CreateItem.of('2x create:experience_nugget', 0.25)
        ],
        ['sophisticatedbackpacks:iron_backpack']
    )

    event.recipes.create.crushing(
        [
          Item.of('minecraft:leather', 2),
          Item.of('minecraft:gold_ingot', 4),
          CreateItem.of('create:experience_nugget', 0.33),
          CreateItem.of('2x create:experience_nugget', 0.25)
        ],
        ['sophisticatedbackpacks:gold_backpack']
    )

    event.recipes.create.crushing(
        [
          Item.of('minecraft:leather', 2),
          Item.of('minecraft:diamond', 2),
          CreateItem.of('create:experience_nugget', 0.33),
          CreateItem.of('2x create:experience_nugget', 0.25)
        ],
        ['sophisticatedbackpacks:diamond_backpack']
    )

    event.recipes.create.crushing(
        [
          Item.of('minecraft:leather', 2),
          Item.of('minecraft:netherite_scrap', 2),
          CreateItem.of('create:experience_nugget', 0.33),
          CreateItem.of('2x create:experience_nugget', 0.25)
        ],
        ['sophisticatedbackpacks:netherite_backpack']
    )
})