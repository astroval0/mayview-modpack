ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mega_showdown:dormant_crystal'),
        [
            'TST',
            'SES',
            'TST'
        ],
        {
            E: 'minecraft:end_crystal',
            S: 'mega_showdown:stellar_tera_shard',
            T: 'mega_showdown:normal_tera_shard'
        }
    )
})