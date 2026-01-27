ServerEvents.recipes(event => {
    event.remove({ output: 'ae2:cable_anchor' })
    event.shapeless(
        Item.of('ae2:cable_anchor', 4), 
        [
            '#ae2:metal_ingots', 
            '#ae2:quartz_wrench'
        ])
})