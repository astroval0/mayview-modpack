ServerEvents.recipes(event => {
    const typeNames = [
        'fire', 
        'water', 
        'grass', 
        'electric', 
        'psychic', 
        'ice', 
        'dragon', 
        'dark', 
        'fairy', 
        'steel', 
        'rock', 
        'ground', 
        'bug', 
        'poison', 
        'flying', 
        'fighting', 
        'ghost'
    ];
    
    typeNames.forEach(typeName => {
        event.shapeless(
            Item.of(`mega_showdown:${typeName}_memory`), 
            [
                `cobblemon:${typeName}_gem`,
                `cobblemon:${typeName}_gem`,
                'cobblemon:upgrade'
            ]
        )
    })
})