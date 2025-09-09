// server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./db/connect.js";
import authRoutes from "./routes/auth.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDb();

// Routes
app.use("/api", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
