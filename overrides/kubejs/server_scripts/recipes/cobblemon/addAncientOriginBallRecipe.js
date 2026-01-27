ServerEvents.recipes(event => {
    event.shaped(
        Item.of('cobblemon:ancient_origin_ball'),
        [
            'RNR',
            'BMB',
            'RNR'
        ],
        {
            M: 'cobblemon:master_ball',
            B: 'cobblemon:black_tumblestone',
            N: 'minecraft:netherite_ingot',
            R: 'minecraft:redstone_block'
        }
    )
})