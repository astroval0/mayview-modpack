ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mega_showdown:rusted_sword'),
        [
            'TNT',
            'NSN',
            'TNT'
        ],
        {
            S: "minecraft:netherite_sword",
            N: "minecraft:netherite_scrap",
            T: "cobblemon:black_tumblestone"
        }
    )
})