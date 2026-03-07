// Utility functions

function formatDate(d) {
  if (!d) return null;
  return new Date(d).toISOString().split("T")[0];
}

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

module.exports = { formatDate, slugify };
