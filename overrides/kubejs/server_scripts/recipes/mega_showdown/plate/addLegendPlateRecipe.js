ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mega_showdown:legend_plate'),
        [
            'ABC',
            'HND',
            'GFE'
        ],
        {
            A: 'mega_showdown:flame_plate',
            B: 'mega_showdown:earth_plate',
            C: 'mega_showdown:zap_plate',
            D: 'mega_showdown:meadow_plate',
            E: 'mega_showdown:icicle_plate',
            F: 'mega_showdown:splash_plate',
            G: 'mega_showdown:mind_plate',
            H: 'mega_showdown:pixie_plate',
            N: 'minecraft:nether_star'
        }
    )
})