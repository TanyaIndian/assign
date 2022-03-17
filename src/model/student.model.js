// Student :- has fields like roll id, current batch, createdAt, updatedAt

const mongoose = require("mongoose")


const studentSchema = new mongoose.Schema(
    
    {
        "rollId": {type:Number,required:true},
        "currentBatch" : {type:mongoose.Schema.Types.ObjectId,
        ref:"batch"},
        "userId" : {type:mongoose.Schema.Types.ObjectId,
            ref:"user"},

                    

    },
    {
        versionKey:false,
        timestamps:true
    }
)
const student = mongoose.model("student",studentSchema)
module.exports = student