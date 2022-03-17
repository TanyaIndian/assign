// Evaluation :- has some evaluation related details like date_of_evaluation, instructor( this will reference
//  the user collection), batch_id ( this will reference the batches collection)

const mongoose = require("mongoose")


const evalSchema = new mongoose.Schema(
    
    {
        "date": {type:String,required:true},
        
        
        "batchId" : {type:mongoose.Schema.Types.ObjectId,
            ref:"batch"},
            "instructor" : {type:mongoose.Schema.Types.ObjectId,
                ref:"user"},
                "studentid1" : {type:mongoose.Schema.Types.ObjectId,
                    ref:"student"},
                    "studentid2" : {type:mongoose.Schema.Types.ObjectId,
                        ref:"student"},
                        "studentid3" : {type:mongoose.Schema.Types.ObjectId,
                            ref:"student"},
               

            
        
        

    },
    {
        versionKey:false,
        timestamps:true
    }
)
const Eval = mongoose.model("eval",evalSchema)
module.exports = Eval