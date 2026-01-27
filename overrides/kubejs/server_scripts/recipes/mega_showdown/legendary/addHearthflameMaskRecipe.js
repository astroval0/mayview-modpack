// --------------------------------
// =-----= Hearthflame Mask =-----=
// --------------------------------
ServerEvents.recipes(event => {
    event.shapeless(
    Item.of('mega_showdown:hearthflame_mask', 1),
        [
        '3x mega_showdown:fire_tera_shard',
        'minecraft:clay'
        ]
)})