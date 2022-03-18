const mongoose = require("mongoose")

const connect = ()=>
{
    return mongoose.connect("mongodb+srv://Tanya:kishuanisha24@cluster0.twigb.mongodb.net/validation")
}
module.exports=connect