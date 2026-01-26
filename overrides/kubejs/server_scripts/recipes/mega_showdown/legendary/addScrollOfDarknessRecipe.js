ServerEvents.recipes(event => {
    event.shaped(
        Item.of('cobblemon:scroll_of_darkness'),
        [
            'DGD',
            'BPB',
            'DLD'
        ],
        {
            B: "minecraft:bamboo",
            L: "cobblemon:black_belt",
            P: "minecraft:paper",
            D: "cobblemon:dusk_stone",
            G: "cobblemon:dark_gem"
        }
    )
})