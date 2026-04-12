const express = require("express");
const router = express.Router();
const Feedback = require("../models/feedback");

// Submit feedback (user side)
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const feedback = await Feedback.create({
      name,
      email,
      subject,
      message
    });

    res.json({ msg: "Feedback submitted", feedback });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all feedback (admin dashboard)
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;