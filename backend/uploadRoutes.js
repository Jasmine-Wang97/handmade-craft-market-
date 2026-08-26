import express from "express";
import products from "./products.js";

const router = express.Router();

router.post("/upload", (req, res) => {
  const { name, price, description, imageUrl } = req.body;

  const newProduct = {
    id: Date.now(),
    name,
    price,
    description,
    imageUrl,
    createdAt: new Date().toISOString()
  };

  products.push(newProduct);

  res.json(newProduct);
});

export default router;
