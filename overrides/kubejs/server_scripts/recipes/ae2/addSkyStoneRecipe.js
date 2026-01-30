ServerEvents.recipes(event => {
    event.shaped(
        "ae2:sky_stone_block",
        [
            'FFF',
            'FCF',
            'FFF'
        ],
        {
            F: "ae2:fluix_crystal",
            C: "ae2:charged_certus_quartz_crystal"
        }
    )

    event.recipes.create.compacting(
     'ae2:sky_stone_block', 
        [
            'ae2:charged_certus_quartz_crystal', 
            Item.of('ae2:fluix_crystal', 8)
        ])
        .heated()
})