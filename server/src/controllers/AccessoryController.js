import { AccessoryModel } from "../models/AccessoryModel.js";
import { CarModel } from "../models/CarModel.js";

export async function createAccessory(req, res) {
    try {
        let compatibleCarsIds = [];
        const { type, label, accessoryPath, thumbnailPath, compatibleCars } =
            req.body;
        const compatibleCar = await CarModel.find({ $or: compatibleCars });
        if (compatibleCar.length > 0) {
            compatibleCarsIds = compatibleCar.map((c) => c._id);
        }
        const accessory = await AccessoryModel.create({
            type,
            label,
            accessoryPath,
            thumbnailPath,
            compatibleCars: compatibleCarsIds,
        });
        res.status(201).json({
            success: true,
            message: "Accessory added.",
            data: accessory,
        });
        await CarModel.updateMany(
            { _id: { $in: compatibleCarsIds } },
            { $push: { accessories: accessory._id } }
        );

    } catch (error) {
        res.stats(500).json({ success: false, message: error.message });
    }
}

export async function getAccessories(req, res) {
    try {
        const { type, label, brand, model } = req.query;
        const filter = {};
        if (type) filter.type = type;
        if (label) filter.label = label;

        let compatibleCarsIds = [];
        if (brand) {
            let carQuery = {};
            if (brand && model) carQuery = { brand, model };
            else if (brand) carQuery.brand = brand;
            const compatibleCar = await CarModel.find(carQuery);
            compatibleCarsIds = compatibleCar.map((c) => c._id);
            if (compatibleCarsIds.length > 0)
                filter.compatibleCars = compatibleCarsIds;
        }

        const accessories = await AccessoryModel.find(filter);
        if (!accessories || accessories.length == 0)
            return res
                .status(404)
                .json({ success: false, message: "Accessory not found." });
        res.status(200).json({
            success: true,
            message: "Accessory fetched successfully.",
            data: accessories,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export async function updateAccessory(req, res) {
    try {
        const { brand, model, type, label } = req.params;
        const car = await CarModel.findOne({ brand, model });
        if (!car) {
            return res.status(401).json({
                success: false,
                message: "Accessory not associated to a car.",
            });
        }
        let filter = {
            type,
            label,
            compatibleCars: { $in: [car._id] },
        };
        const accessory = await AccessoryModel.findOneAndUpdate(
            filter,
            req.body,
            { new: true }
        );
        
        res.status(200).json({
            success: true,
            message: "Accessory updated successfully.",
            data: accessory,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export async function deleteAccessory(req, res) {
    try {
        const { type, label } = req.params;
        const deletedAccessory = await AccessoryModel.findOneAndDelete({
            type,
            label,
        });
        if (!deletedAccessory) {
            return res
                .status(404)
                .json({ success: false, message: "Accessory not found." });
        }
        res.status(200).json({
            success: true,
            message: "Accessory deleted successfully.",
            data: deletedAccessory,
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}
