// Payments module

function charge(amount, card) {
  if (!amount || !card) throw new Error("invalid input");
  return { success: true, amount };
}

module.exports = { charge };
