ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mega_showdown:max_mushroom', 1), // arg 1: output
        [
            'ABC',
            ' X ', // arg 2: the shape (array of strings)
            'DEF'
        ],
        {
            A: 'minecraft:brown_mushroom',
            B: 'minecraft:red_mushroom',  //arg 3: the mapping object
            C: 'biomeswevegone:green_mushroom',
            D: 'biomeswevegone:shelf_fungi',
            E: 'biomeswevegone:weeping_milkcap',
            F: 'biomeswevegone:wood_blewit',
            X: 'minecraft:moss_block'
        }
    )
})