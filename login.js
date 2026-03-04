// Auth module

function login(user, pass) {
  if (!user || !pass) return false;
  return user === "admin" && pass === "secret";
}

module.exports = { login };
