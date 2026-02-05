function parseQuery(query) {
  const q = query.toLowerCase();

  const intent = {
    isCheap: q.includes("sasta") || q.includes("cheap"),
    isLatest: q.includes("latest") || q.includes("new"),
    maxPrice: null,
    keywords: []
  };

  const priceMatch = q.match(/(\d+)\s?k/);
  if (priceMatch) {
    intent.maxPrice = parseInt(priceMatch[1]) * 1000;
  }

  const normalized = q.replace("ifone", "iphone");

  //intent words removeing here 
  const stopWords = ["sasta", "cheap", "latest", "new"];

  intent.keywords = normalized
    .split(" ")
    .filter(w => !stopWords.includes(w));

  return intent;
}

module.exports = parseQuery;
