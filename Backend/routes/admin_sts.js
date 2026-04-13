const express = require("express");
const router = express.Router();

const User = require("../models/user");
const Order = require("../models/order");

router.get("/stats", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const orders = await Order.find();

    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);

    res.json({
      totalUsers,
      totalOrders,
      totalRevenue
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;