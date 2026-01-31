// kubejs/server_scripts/accessories/mayview_stepup_rings.js
// ignored: true
const ResourceLocation = Java.type('net.minecraft.resources.ResourceLocation')
const AttributeModifier = Java.type('net.minecraft.world.entity.ai.attributes.AttributeModifier')
const Operation = Java.type('net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation')
const Attributes = Java.type('net.minecraft.world.entity.ai.attributes.Attributes')

// Accessories API (we’ll try multiple method names to match your build)
const AccessoriesAPI = Java.type('io.wispforest.accessories.api.AccessoriesAPI')

const RINGS = new Set([
  'mayview:kinetic_assist_ring',
  'mayview:ninefold_tread'
])

const STEP_MOD_ID = ResourceLocation.fromNamespaceAndPath('mayview', 'step_up_rings')
const STEP_MOD = new AttributeModifier(STEP_MOD_ID, 0.4, Operation.ADD_VALUE) // 0.6 -> 1.0

function getAccessoriesInv(player) {
  // method names vary; try a few common ones
  if (AccessoriesAPI.getAccessoriesInventory) return AccessoriesAPI.getAccessoriesInventory(player)
  if (AccessoriesAPI.getAccessoryInventory) return AccessoriesAPI.getAccessoryInventory(player)
  if (AccessoriesAPI.getInventory) return AccessoriesAPI.getInventory(player)
  return null
}

function getContainer(inv, name) {
  // container access can vary too
  try { if (inv.getContainer) return inv.getContainer(name) } catch (e) {}
  try { if (inv.getAccessoriesContainer) return inv.getAccessoriesContainer(name) } catch (e) {}
  try { if (inv.container) return inv.container(name) } catch (e) {}
  return null
}

function containerSize(container) {
  try { if (container.getContainerSize) return container.getContainerSize() } catch (e) {}
  try { if (container.size) return container.size() } catch (e) {}
  return 0
}

function getStack(container, i) {
  try { if (container.getItem) return container.getItem(i) } catch (e) {}
  try { if (container.getStackInSlot) return container.getStackInSlot(i) } catch (e) {}
  return null
}

function hasStepRingEquipped(player) {
  const inv = getAccessoriesInv(player)
  if (!inv) return false

  const ring = getContainer(inv, 'ring')
  if (!ring) return false

  const n = containerSize(ring)
  for (let i = 0; i < n; i++) {
    const stack = getStack(ring, i)
    if (stack && !stack.isEmpty() && RINGS.has(stack.id)) return true
  }
  return false
}

ServerEvents.tick(event => {
  // light cost: check every 5 ticks
  if (event.server.tickCount % 5 !== 0) return

  event.server.players.forEach(player => {
    const inst = player.getAttribute(Attributes.STEP_HEIGHT)
    if (!inst) return

    if (hasStepRingEquipped(player)) {
      inst.addOrUpdateTransientModifier(STEP_MOD)
    } else {
      try { inst.removeModifier(STEP_MOD_ID) } catch (e) {}
      try { inst.removeModifier(STEP_MOD) } catch (e) {}
    }
  })
})
