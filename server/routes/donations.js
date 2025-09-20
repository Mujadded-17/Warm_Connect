import express from "express";
import Donation from "../models/Donation.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Create a donation
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const {
      firstName, lastName, phone, email,
      address, title, category, option,
    } = req.body;

    const imagePath = req.file ? `uploads/${req.file.filename}` : undefined;

    const donation = await Donation.create({
      firstName,
      lastName,
      phone,
      email,
      address,
      title,
      category,
      option,
      image: imagePath,
    });

    res.status(201).json({ ok: true, donation });
  } catch (err) {
    console.error("Create donation error:", err);
    res.status(500).json({ ok: false, message: "Server error" });
  }
});

// GET all donations
router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json({ ok: true, donation: donations });
  } catch (err) {
    console.error("Fetch donations error:", err);
    res.status(500).json({ ok: false, message: "Server error" });
  }
});

// GET donations by category
router.get("/category/:categoryName", async (req, res) => {
  try {
    const { categoryName } = req.params;
    const donations = await Donation.find({ category: categoryName }).sort({ createdAt: -1 });
    res.json({ ok: true, donation: donations });
  } catch (err) {
    console.error("Fetch category donations error:", err);
    res.status(500).json({ ok: false, message: "Server error" });
  }
});

export default router;
