import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./db/connect.js";
import authRoutes from "./routes/auth.js";
import statsRoutes from "./routes/stats.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDb();

// Routes
app.use("/api", authRoutes);
app.use("/api/stats", statsRoutes);

// Test route
app.get("/", (req, res) => res.send("Backend is running ✅"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
