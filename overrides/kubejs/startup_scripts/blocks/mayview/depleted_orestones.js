StartupEvents.registry("block", function (event) {
  var DEPLETED_ORESTONE_BLOCK_DEFINITIONS = [
    {
      id: "depleted_asurine",
      displayName: "Depleted Asurine",
      soundType: "stone",
    },
    {
      id: "depleted_crimsite",
      displayName: "Depleted Crimsite",
      soundType: "stone",
    },
    {
      id: "depleted_ochrum",
      displayName: "Depleted Ochrum",
      soundType: "stone",
    },
    {
      id: "depleted_veridium",
      displayName: "Depleted Veridium",
      soundType: "stone",
    }
  ];

  DEPLETED_ORESTONE_BLOCK_DEFINITIONS.forEach(function (definition) {
    var blockBuilder = event
      .create(definition.id)
      .displayName(definition.displayName)
      .hardness(1)
      .resistance(1);

    if (definition.soundType === "stone") {
      blockBuilder.stoneSoundType();
    } else {
      blockBuilder.soundType(definition.soundType);
    }
  });
});
