ServerEvents.recipes(event => {
  const BACKPACK_UPGRADES = [
    'sophisticatedbackpacks:pickup_upgrade',
    'sophisticatedbackpacks:advanced_pickup_upgrade',
    'sophisticatedbackpacks:filter_upgrade',
    'sophisticatedbackpacks:advanced_filter_upgrade',
    'sophisticatedbackpacks:magnet_upgrade',
    'sophisticatedbackpacks:advanced_magnet_upgrade',
    'sophisticatedbackpacks:feeding_upgrade',
    'sophisticatedbackpacks:advanced_feeding_upgrade',
    'sophisticatedbackpacks:restock_upgrade',
    'sophisticatedbackpacks:advanced_restock_upgrade',
    'sophisticatedbackpacks:deposit_upgrade',
    'sophisticatedbackpacks:advanced_deposit_upgrade',
    'sophisticatedbackpacks:advanced_refill_upgrade',
    'sophisticatedbackpacks:inception_upgrade',
    'sophisticatedbackpacks:everlasting_upgrade',
    'sophisticatedbackpacks:tank_upgrade',
    'sophisticatedbackpacks:battery_upgrade',
    'sophisticatedbackpacks:infinity_upgrade',
    'sophisticatedbackpacks:survival_infinity_upgrade'
  ]
  

  BACKPACK_UPGRADES.forEach(inputId => {
    event.recipes.create.crushing(
      [
        Item.of('minecraft:iron_ingot', 2),
        Item.of('minecraft:string', 2),
        CreateItem.of('create:experience_nugget', 0.33),
        CreateItem.of('2x create:experience_nugget', 0.25)
      ],
      [inputId]
    )
  })
})