import mongoose from "mongoose";

const connectDb = async () => {
  try {
    if (!process.env.MONGO_URI) throw new Error("MONGO_URI not defined in .env");
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" MongoDB connected");
  } catch (error) {
    console.error(" MongoDB connection failed:", error.message);
    // do NOT exit immediately in dev
  }
};

export default connectDb;
