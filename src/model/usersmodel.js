const mongoose = require("mongoose")
// firstName, lastName, gender, dateOfBirth, type(type will be student, admin or instructor) , createdAt, updatedAt

const userSchema = new mongoose.Schema(
    
    {
        "firstName": {type:String,required:true},
        "lastName" : {type:String, required: false},
        "gender" : {type:String, required: false},
        "dob"   : {type:String},
        "type" : {type:String,required:true}
        

    },
    {
        versionKey:false,
        timestamps:true
    }
)
const User = mongoose.model("user",userSchema)
module.exports = User