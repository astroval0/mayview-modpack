console.info("[PhotoQuests] Loaded: quest counter");

if (!global.Photo) {
  console.error("[PhotoQuests] Photo engine missing! Did engine show up?");
}

const questCount = global.Photo.quests.length;
console.info(["Loaded quests:", questCount].join(" "))