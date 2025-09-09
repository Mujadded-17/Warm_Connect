// server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./db/connect.js";

import statsRoutes from "./routes/stats.js";   // from your branch
import authRoutes from "./routes/auth.js";    // from master

dotenv.config();
console.log("JWT_SECRET =", process.env.JWT_SECRET);

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDb();

// Routes
app.use("/api/stats", statsRoutes);  // stats route
app.use("/api", authRoutes);         // auth route

// Test route
app.get("/", (req, res) => res.send("Backend is running ✅"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
