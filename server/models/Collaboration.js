import mongoose from "mongoose";

const collaborationSchema = new mongoose.Schema({
  donationId: { type: mongoose.Schema.Types.ObjectId, ref: "Donation" },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Collaboration", collaborationSchema);
