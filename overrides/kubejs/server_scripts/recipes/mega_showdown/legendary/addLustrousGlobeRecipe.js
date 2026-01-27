ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mega_showdown:lustrous_globe'),
        [
            'DGD',
            'GOG',
            'DGD'
        ],
        {
            O: "mega_showdown:lustrous_orb",
            G: "cobblemon:ghost_gem",
            D: "cobblemon:dusk_stone"
        }
    )
})