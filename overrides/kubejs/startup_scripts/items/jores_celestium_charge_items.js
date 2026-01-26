StartupEvents.registry('item', event => {
  event.create('celestium_sun_infused')
    .displayName('Sun-Infused Celestium')
    .maxStackSize(64)

  event.create('celestium_lunar_charged')
    .displayName('Lunar-Charged Celestium')
    .maxStackSize(64)
})