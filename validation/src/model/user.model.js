// first_name, last_name, email, pincode, age, gender,

// 

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    pincode:{type:Number,required:true},
    age:{type:Number,required:true},
    gender:{type:String,  enum:["female","male","other"] ,default:"male",required:true}
},
{
    versionKey:false,
    timestamps:true
})

const User = mongoose.model("user",userSchema)
module.exports=User