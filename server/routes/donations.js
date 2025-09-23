// server/routes/donations.js
import express from "express";
import Donation from "../models/Donation.js";
import upload from "../middleware/upload.js";

const router = express.Router();

/**
 * POST /api/donations
 * multipart/form-data:
 *  - image (file, optional)
 *  - firstName,lastName,phone,email,address,title,category,option
 *  - description (or itemDescription/details/desc)
 */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const {
      firstName = "",
      lastName = "",
      phone = "",
      email = "",
      address = "",
      title = "",
      category = "",
      option = "pickup",
    } = req.body;

    // accept common aliases, then trim
    const description = (
      req.body.description ??
      req.body.itemDescription ??
      req.body.details ??
      req.body.desc ??
      ""
    ).toString().trim();

    const normalizedOption = option === "delivery" ? "delivery" : "pickup";
    const imagePath = req.file ? `uploads/${req.file.filename}` : undefined;

    const donation = await Donation.create({
      firstName,
      lastName,
      phone,
      email,
      address,
      title,
      description,
      category,
      option: normalizedOption,
      image: imagePath,
    });

    return res.status(201).json({ ok: true, donation });
  } catch (err) {
    console.error("Create donation error:", err);
    return res.status(500).json({ ok: false, message: "Server error" });
  }
});

/**
 * GET /api/donations
 * Optional: ?category=Gadgets&q=sony
 * Returns BOTH `donation` and `donations` for back-compat.
 */
router.get("/", async (req, res) => {
  try {
    const { category = "", q = "" } = req.query;
    const find = {};
    if (category && category.toLowerCase() !== "all") {
      find.category = { $regex: `^${category}$`, $options: "i" };
    }
    if (q) find.title = { $regex: q, $options: "i" };

    const items = await Donation.find(find).sort({ createdAt: -1 }).lean();
    return res.json({ ok: true, donation: items, donations: items });
  } catch (err) {
    console.error("Fetch donations error:", err);
    return res.status(500).json({ ok: false, message: "Server error" });
  }
});

/** GET /api/donations/category/:name */
router.get("/category/:name", async (req, res) => {
  try {
    const name = req.params.name || "";
    const items = await Donation.find({
      category: { $regex: `^${name}$`, $options: "i" },
    })
      .sort({ createdAt: -1 })
      .lean();

    return res.json({ ok: true, donation: items, donations: items });
  } catch (err) {
    console.error("Fetch donations by category error:", err);
    return res.status(500).json({ ok: false, message: "Server error" });
  }
});

/** GET /api/donations/:id */
router.get("/:id", async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id).lean();
    if (!donation)
      return res.status(404).json({ ok: false, message: "Donation not found" });
    return res.json({ ok: true, donation });
  } catch (err) {
    console.error("Fetch donation by ID error:", err);
    return res.status(500).json({ ok: false, message: "Server error" });
  }
});

export default router;
