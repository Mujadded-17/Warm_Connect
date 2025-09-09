import express from "express";
import User from "../models/User.js";
import Donation from "../models/Donation.js";
import Collaboration from "../models/Collaboration.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const usersCount = await User.countDocuments();
    const donationsCount = await Donation.countDocuments();
    const collaborationsCount = await Collaboration.countDocuments();

    res.json({
      users: usersCount,
      donations: donationsCount,
      collaborations: collaborationsCount
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
