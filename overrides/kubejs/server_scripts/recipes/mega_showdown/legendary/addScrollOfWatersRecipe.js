ServerEvents.recipes(event => {
    event.shaped(
        Item.of('cobblemon:scroll_of_waters'),
        [
            'DGD',
            'BPB',
            'DLD'
        ],
        {
            B: "minecraft:bamboo",
            L: "cobblemon:black_belt",
            P: "minecraft:paper",
            D: "cobblemon:water_stone",
            G: "cobblemon:water_gem"
        }
    )
})