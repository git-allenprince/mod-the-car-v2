import express from "express";
import {
    createAccessory,
    deleteAccessory,
    getAccessories,
    updateAccessory,
} from "../controllers/AccessoryController.js";

const router = express.Router();
router.get("/", getAccessories);
router.post("/", createAccessory);
router.put("/:brand/:model/:type/:label", updateAccessory);
router.delete("/:type/:label", deleteAccessory);

export default router;