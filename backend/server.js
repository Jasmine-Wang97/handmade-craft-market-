import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "node:path";
import { fileURLToPath } from "node:url";
import products from "./products.js";
import productDetails from "./productDetail.js";
import orderRoutes from "./orderRoutes.js";
import uploadRoutes from "./uploadRoutes.js";
import listingRoutes from "./listingRoutes.js";


dotenv.config({
  path: path.join(path.dirname(fileURLToPath(import.meta.url)), ".env"),
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(orderRoutes);
app.use(uploadRoutes);
app.use(listingRoutes);

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  res.json(productDetails[id]);
});

const PORT = process.env.PORT || 5001;

try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB connected");

  app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("MongoDB connection failed:", error.message);
  process.exit(1);
}



