const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    firstName:{type:String,required:true},
    lastName:{type:String,required:false},
    profilepic:[{type:String,required:false}]

},{
    timestamps:true,
    versionKey:false
})

const User = mongoose.model("user",userSchema)

module.exports = User