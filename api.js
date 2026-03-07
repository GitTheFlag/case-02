// API request handler

function handleRequest(req, res) {
  if (!req || !req.body) return res.status(400).json({ error: "bad request" });
  res.json({ status: "ok" });
}

module.exports = { handleRequest };
