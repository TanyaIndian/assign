const mongoose = require("mongoose")

module.exports = ()=>
{
    return mongoose.connect("mongodb+srv://Tanya:kishuanisha24@cluster0.twigb.mongodb.net/practice")
}

