// server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import connectDb from "./db/connect.js";
import statsRoutes from "./routes/stats.js";
import authRoutes from "./routes/auth.js";
import donationsRoutes from "./routes/donations.js"; // <— add this (we’ll create it below)

dotenv.config();
console.log("JWT_SECRET =", process.env.JWT_SECRET);

const app = express();
app.use(cors());
app.use(express.json());

// Serve /uploads statically
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // <— important

// DB
connectDb();

// Routes
app.use("/api/stats", statsRoutes);
app.use("/api", authRoutes);
app.use("/api/donations", donationsRoutes); // <— new

// Test route
app.get("/", (req, res) => res.send("Backend is running ✅"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
