// Payments module

function charge(amount, card) {
  if (!amount || !card) throw new Error("invalid input");
  return { success: true, amount };
}

module.exports = { charge };

function refund(chargeId) {
  if (!chargeId) throw new Error("chargeId required");
  return { refunded: true, chargeId };
}
