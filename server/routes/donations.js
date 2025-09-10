import express from "express";
import Donation from "../models/Donation.js";
import upload from "../middleware/upload.js"; // multer config

const router = express.Router();

// Create donation
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const {
      firstName, lastName, phone, email,
      address, title, category, option,
    } = req.body;

    const imagePath = req.file ? `uploads/${req.file.filename}` : undefined;

    const doc = await Donation.create({
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

    res.status(201).json({ ok: true, donation: doc });
  } catch (err) {
    console.error("Create donation error:", err);
    res.status(500).json({ ok: false, message: "Server error" });
  }
});

export default router;
