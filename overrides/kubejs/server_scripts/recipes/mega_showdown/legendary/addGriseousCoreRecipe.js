ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mega_showdown:griseous_core'),
        [
            'DGD',
            'GOG',
            'DGD'
        ],
        {
            O: "mega_showdown:griseous_orb",
            G: "cobblemon:ghost_gem",
            D: "cobblemon:dusk_stone"
        }
    )
})