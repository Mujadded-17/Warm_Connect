import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import path from "path";
import { fileURLToPath } from "url";

import connectDb from "./db/connect.js";
import statsRoutes from "./routes/stats.js";
import authRoutes from "./routes/auth.js";
import donationsRoutes from "./routes/donations.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());

app.use(express.json());

app.use("/api", authRoutes);

// Serve /uploads statically
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB
connectDb();

// Routes
app.use("/api/stats", statsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/donations", donationsRoutes);

// Test route
app.get("/", (req, res) => res.send("Backend is running ✅"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
