// Auth module

function login(user, pass) {
  if (!user || !pass) return false;
  return user === "admin" && pass === "secret";
}

function logout(session) {
  session.destroy();
}

module.exports = { login, logout };
