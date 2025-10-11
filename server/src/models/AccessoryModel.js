import mongoose from "mongoose";

const AccessorySchema = new mongoose.Schema({
    type:{type:String, enum:["Spoiler", "Wheel", "Rim"], required: true},
    label:{type:String, required:true},
    accessoryPath:{type:String, required:true},
    thumbnailPath:{type: String},
    compatibleCars:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Cars"
        }
    ]
})
AccessorySchema.index({ type: 1, label: 1 }, { unique: true });

export const AccessoryModel = mongoose.model("Accessories", AccessorySchema);