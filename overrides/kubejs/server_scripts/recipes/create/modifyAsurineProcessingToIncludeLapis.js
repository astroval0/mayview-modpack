ServerEvents.recipes(event => {
    // Remove the existing crushing recipe for 
    // Asurine and #create:stone_types/asurine
    event.remove({
        type: "create:crushing",
        input: "create:asurine"
    })
    // Add a new crushing recipe for Asurine 
    // to produce Lapis Lazuli
    event.recipes.create.crushing(
    [
        CreateItem.of(
            'minecraft:lapis_lazuli', 0.1
        ), 
        CreateItem.of(
            'create:crushed_raw_zinc', 0.3
        ),
        CreateItem.of(
            'create:zinc_nugget', 0.3
        )
    ], 
        'create:asurine'
    )
})

// Add a new crushing recipe for 
// all items tagged with #create:stone_types/asurine 
// to add Lapis Lazuli as a possible output with a 10% chance
ServerEvents.recipes(event => {
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { tag: 'create:stone_types/asurine' }
        ],
        results: [
            { id: 'minecraft:lapis_lazuli', chance: 0.1 },
            { id: 'create:crushed_raw_zinc', chance: 0.3 },
            { id: 'create:zinc_nugget', chance: 0.3 }
        ]
    })
})