// ignored: true

ServerEvents.loaded(event => {
  const out = [];

  // Get every item id in the item registry
  event.server.registryAccess()
    .registryOrThrow("minecraft:item")
    .entrySet()
    .forEach(e => {
      const id = String(e.key.location());
      if (id.startsWith("cobblemon:")) out.push(id);
    });

  out.sort();

  const file = event.server.getFile("kubejs/cobblemon_item_ids.txt");
  file.write(out.join("\n"));

  console.info(`[Mayview] Dumped ${out.length} Cobblemon item ids -> kubejs/cobblemon_item_ids.txt`);
});
