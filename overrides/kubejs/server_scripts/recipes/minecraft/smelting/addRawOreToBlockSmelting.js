ServerEvents.recipes(event => {
    // Raw Copper Block 
    event.smelting('minecraft:copper_block', 'minecraft:raw_copper_block')
    event.blasting('minecraft:copper_block', 'minecraft:raw_copper_block')

    // Raw Iron Block
    event.smelting('minecraft:iron_block', 'minecraft:raw_iron_block')
    event.blasting('minecraft:iron_block', 'minecraft:raw_iron_block')

    // Raw Gold Block
    event.smelting('minecraft:gold_block', 'minecraft:raw_gold_block')
    event.blasting('minecraft:gold_block', 'minecraft:raw_gold_block')
});