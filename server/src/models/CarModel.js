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

export const CarModel= mongoose.model("Cars", CarSchema);