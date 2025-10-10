import mongoose from "mongoose";

const AccessorySchema = new mongoose.Schema({
    type:{type:String, enum:["spoiler", "wheel", "rim"], required: true},
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

export const AccessoryModel = mongoose.model("Accessories", AccessorySchema);