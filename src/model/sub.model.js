// Student :- has fields like roll id, current batch, createdAt, updatedAt

const mongoose = require("mongoose")


const subSchema = new mongoose.Schema(
    
    {
        "marks": {type:Number,required:true},
        "evalId" : {type:mongoose.Schema.Types.ObjectId,
        ref:"eval"},
        "studenyId" : {type:mongoose.Schema.Types.ObjectId,
            ref:"student"},

                    

    },
    {
        versionKey:false,
        timestamps:true
    }
)
const Sub = mongoose.model("sub",subSchema)
module.exports = Sub