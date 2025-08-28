import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./db/connect.js";

dotenv.config();

console.log("Loaded MONGO_URI:", process.env.MONGO_URI); // debug

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDb();

// Test route
app.get("/", (req, res) => res.send("Backend is running ✅"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
