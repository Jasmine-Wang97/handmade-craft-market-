import express from "express";
import products from "./products.js";

const router = express.Router();

// Seller: Get all listings
router.get("/seller/listings", (req, res) => {
  res.json(products);
});

export default router;
