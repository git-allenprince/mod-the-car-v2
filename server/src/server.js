import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import carRoutes from "./routes/CarRoutes.js"
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/cars", carRoutes)
connectDB();

app.get("/", (req, res) => res.send("Server is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
