StartupEvents.registry('block', event => {
  event.create('delibird_red_present', 'cardinal')
    .displayName('Delibird Present (Red)')
    .soundType('wool')
    .hardness(0.6)
    .resistance(0.6)
    .requiresTool(false)
});
