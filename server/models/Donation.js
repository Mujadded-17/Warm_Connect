import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  address: { type: String, required: true },

  title: { type: String, required: true },
  category: { type: String, required: true },
  image: String,                      // saved file path
  option: { type: String, enum: ["pickup", "delivery"], default: "pickup" },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Donation", donationSchema);
