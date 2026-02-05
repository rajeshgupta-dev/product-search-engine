const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/product.routes");
const searchRoutes = require("./routes/search.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("home page");
});
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/search", searchRoutes);

module.exports = app;
