// Auth module

function login(user, pass) {
  return user === "admin" && pass === "secret";
}

module.exports = { login };
