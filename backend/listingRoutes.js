import express from "express";
import products from "./products.js";

const router = express.Router();

// Seller: Get all listings
router.get("/seller/listings", (req, res) => {
  res.json(products);
});

// Edit product
router.put("/seller/listings/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});
//delete API
router.delete("/seller/listings/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(index, 1);
  res.json({ message: "Product deleted" });
});


export default router;
