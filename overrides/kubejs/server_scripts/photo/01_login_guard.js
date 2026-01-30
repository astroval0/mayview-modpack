// server_scripts/photo/01_login_guard.js
PlayerEvents.loggedIn(e => {
  e.player.persistentData.putLong("photoquest_login_ms", Date.now());
});