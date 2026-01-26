ServerEvents.recipes(event => {
    event.shaped(
        Item.of('cobblemon:cherish_ball'),
        [
            'RRR',
            'NCN',
            'RRR'
        ],
        {
            C: 'minecraft:copper_ingot',
            N: 'minecraft:netherite_ingot',
            R: 'cobblemon:red_apricorn'
        }
    )
})