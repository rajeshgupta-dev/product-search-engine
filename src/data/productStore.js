let products = [];
let productIdCounter = 1;

// add new product
function addProduct(product) {
  const newProduct = {
    productId: productIdCounter++,
    metadata: {},
    createdAt: new Date(),
    ...product
  };
  products.push(newProduct);
  return newProduct;
}

// updateing metadata
function updateMetadata(productId, metadata) {
  const product = products.find(p => p.productId === productId);
  if (!product) return null;

  product.metadata = {
    ...product.metadata,
    ...metadata
  };
  return product;
}

// geting all product here
function getAllProducts() {
  return products;
}

module.exports = {
  addProduct,
  updateMetadata,
  getAllProducts
};
