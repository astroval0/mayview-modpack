ServerEvents.recipes((event) => {
    // Make a list of apricorn colors
    const APRICORN_COLORS = ['red','yellow','green','blue','pink','black','white'];
    // Shorthand for campfire pot item
    const POT = 'cobblemon:campfire_pot';

    // Remove existing campfire pot recipes
    function removeCampfirePotRecipes() {
        APRICORN_COLORS.forEach((color) => {
            event.remove({ output: `${POT}_${color}` });
        });
    }

    // Add modified campfire pot recipes - 
    // #c:glass_blocks/colorless instead of plain glass
    function addModifiedCampfirePotRecipes() {
        APRICORN_COLORS.forEach((color) => {
            event.shaped(`${POT}_${color}`, [
                'CGC',
                'A A',
                'CCC'
            ], {
                C: 'minecraft:copper_ingot',
                A: `cobblemon:apricorn_${color}`,
                G: '#c:glass_blocks/colorless'
            });
        });
    }
})