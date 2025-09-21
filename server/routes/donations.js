import express from "express"; 
import Donation from "../models/Donation.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// CREATE DONATION
router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);
    console.log("REQ FILE:", req.file);

    const {
      firstName,
      lastName,
      phone,
      email,
      address,
      title,
      category,
      option,
      description,
    } = req.body;

    const imagePath = req.file ? `uploads/${req.file.filename}` : undefined;

    const donation = await Donation.create({
      firstName: firstName || "",
      lastName: lastName || "",
      phone: phone || "",
      email: email || "",
      address: address || "",
      title: title || "",
      category: category || "",
      option: option || "pickup",
      description: description || "", // ✅ fixed
      image: imagePath,
    });

    res.status(201).json({ ok: true, donation });
  } catch (err) {
    console.error("Create donation error:", err);
    res.status(500).json({ ok: false, message: "Server error" });
  }
});

// GET ALL DONATIONS
router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json({ ok: true, donation: donations });
  } catch (err) {
    console.error("Fetch donations error:", err);
    res.status(500).json({ ok: false, message: "Server error" });
  }
});

// GET DONATION BY ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await Donation.findById(id);
    if (!donation) return res.status(404).json({ ok: false, message: "Donation not found" });
    res.json({ ok: true, donation });
  } catch (err) {
    console.error("Fetch donation by ID error:", err);
    res.status(500).json({ ok: false, message: "Server error" });
  }
});

export default router;
