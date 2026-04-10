const express = require("express");
const router = express.Router();
const Order = require("../models/order");

router.post("/", async (req, res) => {
  const { userId, items, total } = req.body;

  const order = new Order({ userId, items, total });
  await order.save();

  res.json({ message: "Order placed" });
});

module.exports = router;