import express from "express";
import orders, { createOrder } from "./order.js";

const router = express.Router();

router.get("/orders", (req, res) => {
  res.json(orders);
});

router.post("/orders", (req, res) => {
  const order = createOrder(req.body);
  orders.push(order);
  res.json(order);
});

export default router;
