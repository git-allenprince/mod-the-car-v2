import { AccessoryModel } from "../models/AccessoryModel";
import { CarModel } from "../models/CarModel";

export async function createAccessory(req, res) {
    try {
        let compatibleCarsIds = [];
        const { type, label, accessoryPath, thumbnailPath, compatibleCars } =
            req.body;
        const compatibleCar = await CarModel.find({ $or: compatibleCars });
        if (compatibleCar) {
            compatibleCarsIds = compatibleCar.map((c) => c._id);
        }
        const accessory = await AccessoryModel.create({
            type,
            label,
            accessoryPath,
            thumbnailPath,
            compatibleCar: compatibleCarsIds,
        });
        res.status(201).json({
            success: true,
            message: "Accessory added.",
            data: accessory,
        });
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

        let compatibleCarsIds=[]
        if (brand) {
            let carQuery = {}
            if(brand && model) carQuery={brand,model};
            else if(brand) carQuery.brand = brand;
            const compatibleCar = await CarModel.find(carQuery)
            compatibleCarsIds = compatibleCar.map(c=>c._id); 
            if(compatibleCarsIds.length>0) filter.compatibleCars = compatibleCarsIds
        }

        const accessories = await AccessoryModel.find(filter);
        if(!accessories || accessories.length==0) return res.status(401).json({success:false, message:"Accessory not found."});
        res.status(200).json({success:true, message: "Accessory fetched successfully.", data: accessories});
    } catch (error) {
        res.status(500).json({success:false, message: error.message});
    }
}
