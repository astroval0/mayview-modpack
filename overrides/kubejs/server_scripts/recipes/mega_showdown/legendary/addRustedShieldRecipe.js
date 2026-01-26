ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mega_showdown:rusted_shield'),
        [
            'TNT',
            'NSN',
            'TNT'
        ],
        {
            S: "morevanillashields:netherite_shield",
            N: "minecraft:netherite_scrap",
            T: "cobblemon:black_tumblestone"
        }
    )
})