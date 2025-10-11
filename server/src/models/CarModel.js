import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    brand:{type: String, required: true},
    model:{type:String, required: true},
    glbPath:{type:String, required: true},
    accessories:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Accessories'
        }
    ]
})

CarSchema.index({ brand: 1, model: 1 }, { unique: true });


export const CarModel= mongoose.model("Cars", CarSchema);