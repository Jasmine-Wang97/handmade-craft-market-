import express from "express";
import cors from "cors";
import products from "./products.js";
import productDetails from "./productDetails.js";

const app = express();
app.use(cors());

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  res.json(productDetails[id]);
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
