import mongoose from "mongoose";

const AccessorySchema = new mongoose.Schema({
    type:{type:String, enum:["spoiler", "wheel", "rim"], required: true},
    label:{type:String, required:true},
    path:{type:String, required:true},
    thumbnail:{type: String},
    compatibleCars:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Cars"
        }
    ]
})

export const Accessories = mongoose.model("Accessories", AccessorySchema);