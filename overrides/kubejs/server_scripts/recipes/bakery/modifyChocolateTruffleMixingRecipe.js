ServerEvents.recipes(event => {
    // Remove existing truffle output recipes
    const SCHEMA_TYPES = [
        "create:mixing",
        "farm_and_charm:pot_cooking",
        "farmersdelight:cooking"
    ]
    SCHEMA_TYPES.forEach(type =>
        event.remove({
            type: type,
            output: "bakery:chocolate_truffle"
        })
    )

    // Re-add recipes with modified inputs
    event.recipes.create.mixing(
        'bakery:chocolate_truffle',
        [
        'minecraft:sugar',
        'create:bar_of_chocolate',
        Fluid.of('minecraft:milk', 1000)
        ]
    ).heated()

    
})