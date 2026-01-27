ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mega_showdown:reveal_glass'),
        [
            'DGD',
            'EMA',
            'QFQ'
        ],
        {
            M: "relics:magic_mirror",
            Q: "minecraft:quartz",
            D: "minecraft:observer",
            E: "cobblemon:electric_gem",
            A: "cobblemon:flying_gem",
            G: "cobblemon:ground_gem",
            F: "cobblemon:fairy_gem"
        }
    )
})