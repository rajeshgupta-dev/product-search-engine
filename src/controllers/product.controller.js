const store = require("../data/productStore");

exports.createProduct = (req, res) => {
  try {
    const product = store.addProduct(req.body);
    res.status(201).json({
      productId: product.productId
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to create product" });
  }
};


exports.updateProductMetadata = (req, res) => {
  const { productId, metadata } = req.body;

  if (!productId || !metadata) {
    return res.status(400).json({ message: "Invalid request" });
  }

  const updated = store.updateMetadata(productId, metadata);

  if (!updated) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(updated);
};

exports.getAllProducts = (req, res) => {
  try {
    const products = store.getAllProducts();
    res.json({
      count: products.length,
      data: products
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

