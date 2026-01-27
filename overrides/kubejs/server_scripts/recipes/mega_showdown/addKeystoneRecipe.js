ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mega_showdown:keystone'),
        [
            'ENF',
            'NAN',
            'INW'
        ],
        {
            A: '#cobblemon:apricorns',
            E: 'mega_showdown:rock_tera_shard',
            F: 'mega_showdown:flying_tera_shard',
            I: 'mega_showdown:fire_tera_shard',
            N: 'cobblemon:normal_gem',
            W: 'mega_showdown:water_tera_shard'
        }
    )
})