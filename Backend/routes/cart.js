const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");

// GET CART
router.get("/:userId", async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  res.json(cart || { items: [] });
});

// SAVE CART
router.post("/", async (req, res) => {
  const { userId, items } = req.body;

  let cart = await Cart.findOne({ userId },{items},{ upsert: true, new: true });

  if (cart) {
    cart.items = items;
  } else {
    cart = new Cart({ userId, items });
  }

  await cart.save();
  res.json(cart);
});

module.exports = router;