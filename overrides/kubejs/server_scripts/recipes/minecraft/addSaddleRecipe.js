ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:saddle', 1), // arg 1: output
        [
            ' L ',
            'LIL',
        ],
        {
            L: 'minecraft:leather',
            I: 'minecraft:iron_ingot',  //arg 3: the mapping object
        }
    )
})