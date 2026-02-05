function calculateScore(product, intent) {
  let score = 0;

  // rating maximum 5)
  score += (product.rating || 0) * 10;

  // stock available?
  if (product.stock > 0) score += 20;
  else score -= 50;

  // sales populrity
  score += Math.min(product.sales || 0, 1000) / 10;

  // cheapest intet
  if (intent.isCheap && intent.maxPrice) {
    if (product.price <= intent.maxPrice) score += 30;
    else score -= 20;
  }

  // latest intent means new 
  if (intent.isLatest) {
    const match = product.title.match(/\d+/);
    if (match) score += parseInt(match[0]);
  }

  return score;
}

module.exports = calculateScore;
