// Yes this also has that 
// Meteoroid is typod as Metoerid in Mega Showdown 1.5.1 + 1.7.1
ServerEvents.recipes(event => {
  event.recipes.create.compacting(
    '2x mega_showdown:mega_meteorid_radiated_block', 
    [
        'create:experience_block', 
        'mega_showdown:mega_meteorid_block',
        Fluid.of('minecraft:lava', 1000)
    ])
    .superheated()
})