ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mega_showdown:blue_orb'),
        [
            'TWT',
            'WNW',
            'TWT'
        ],
        {
            N: "minecraft:nether_star",
            T: "mega_showdown:water_tera_shard",
            W: "cobblemon:water_gem"
        }
    )
})