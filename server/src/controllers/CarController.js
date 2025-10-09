import { CarModel } from "../models/CarModel.js";

export async function createCar(req, res) {
    const { brand, model, glbPath } = req.body;
    try {
        const newCar = await CarModel.create({
            brand,
            model,
            glbPath,
        });
        res.status(201).json({
            success: true,
            message: "Car added successfully.",
            data: newCar,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export async function getCars(req, res) {
    try {
        const { brand, model } = req.query;
        let filter = {};
        if (brand) filter.brand = brand;
        if (model) filter.model = model;
        const cars = await CarModel.find(filter);
        if(!cars || cars.length==0){
            return res.status(404).json({
                success: false,
                message: "Car not found.",
            });
        }
        res.status(200).json({
            success: true,
            message: "Car details fetched successfully.",
            data: cars,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export async function updateCar(req, res) {
    try {
        const { brand, model } = req.params;
        const updatedCar = await CarModel.findOneAndUpdate(
            { brand, model },
            req.body,
            { new: true }
        );
        if (!updatedCar) {
            return res.status(404).json({
                success: false,
                message: "Car not found.",
            });
        }
        res.status(200).json({
            success: true,
            message: "Car updated successfully.",
            data: updatedCar,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export async function deleteCar(req, res) {
    try {
        const { brand, model } = req.params;
        const deletedCar = await CarModel.findOneAndDelete({ brand, model });
        if (!deletedCar) {
            return res.status(404).json({
                success: false,
                message: "Car not found.",
            });
        }
        res.status(200).json({
            success: true,
            message: "Car deleted successfully.",
            data: deletedCar,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
