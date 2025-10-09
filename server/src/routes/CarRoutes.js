import express from "express";
import { createCar, deleteCar, getCars, updateCar } from "../controllers/CarController.js";

const router = express.Router();

router.get("/", getCars);
router.post("/", createCar);
router.put("/:brand/:model", updateCar);
router.delete("/:brand/:model",deleteCar)

export default router;