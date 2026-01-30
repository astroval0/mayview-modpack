ServerEvents.recipes(event => {
    const sharestoneColors = [
        "light_gray",
        "gray",
        "black",
        "brown",
        "magenta",
        "purple",
        "pink",
        "blue",
        "light_blue",
        "green",
        "lime",
        "yellow",
        "orange",
        "red",
        "cyan",
    ]

    /*
    const sharestoneId = "sharestone"
    const sharestoneMap = idsFor('waystones', sharestoneColors, sharestoneId)
    const idsFor = (ns, basePath, itemId) => prefixes.map(p => `${ns}:${p}_${itemId}`)
    
    sharestoneColors.forEach(Color => {
        event.shapeless(
            ("waystones:${Color}_sharestones"),
            ( 
                Item.of("#waystones:sharestone", 1),
                Item.of("${Color}_dye")
            )
        )
    });
    */

    // sharestone color map to shapeless recipe
    function sharestonedyerecipe(color) {
        event.shapeless(`waystones:${color}_sharestone`, 
            [
                `minecraft:${color}_dye`,
                `#waystones:sharestones`
            ]
        )
    }

    // Generate all sharestone dye shapeless recipes
    sharestoneColors.forEach(color => sharestonedyerecipe(color))
})