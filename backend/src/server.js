import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./lib/db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
// connectDB();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
    res.send("Server is up and running...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});