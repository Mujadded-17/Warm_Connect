import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  title: String,
  category: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Donation", donationSchema);
