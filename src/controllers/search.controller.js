const store = require("../data/productStore");
const parseQuery = require("../utils/queryParser");
const calculateScore = require("../utils/ranking");

// matjing and normalizeing
const normalize = (text) =>
  text.toLowerCase().replace("ifone", "iphone");

exports.searchProducts = (req, res) => {
  const query = req.query.query;

  if (!query) {
    return res.status(400).json({ message: "Query is required" });
  }

  const intent = parseQuery(query);
  const products = store.getAllProducts();

  let results = products;

  // if keyword exits
  if (intent.keywords && intent.keywords.length > 0) {
    results = results.filter(p =>
      intent.keywords.some(k =>
        normalize(p.title).includes(normalize(k))
      )
    );
  }

  //price filter
  if (intent.maxPrice) {
    results = results.filter(p => p.price <= intent.maxPrice);
  }

  // scoring
  results = results.map(p => ({
    ...p,
    score: calculateScore(p, intent)
  }));

  // sort by score-desending
  results.sort((a, b) => b.score - a.score);

  res.json({
    query,
    totalResults: results.length,
    data: results.slice(0, 20)
  });
};
