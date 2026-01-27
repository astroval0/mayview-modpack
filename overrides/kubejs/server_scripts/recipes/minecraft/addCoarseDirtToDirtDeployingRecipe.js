ServerEvents.recipes(event => {
  event.custom({
    type: "create:deploying",
    ingredients: [
      { item: "minecraft:coarse_dirt" },
      { tag: "minecraft:hoes" }  // or "c:tools/hoes" if you prefer
    ],
    keep_held_item: true,
    results: [
      { id: "minecraft:dirt" }
    ]
  })
})
