const express = require("express");
const router = express.Router();
const {
  createProduct,
  updateProductMetadata
} = require("../controllers/product.controller");
const { getAllProducts } = require("../controllers/product.controller");

router.get("/", getAllProducts);
router.post("/", createProduct);
router.put("/meta-data", updateProductMetadata);

module.exports = router;
