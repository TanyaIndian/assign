// - Post Model
// - body (string, optional),
// - likes (integer, minimum default is 0)
// - image (string, optional)
// - timestamps (string, required

const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    body:{type:String,required:true},
   
    likes:{type:Number,default:0},
   
    image:[{type:String}],
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
    


}
,
{
    timestamps:true,
    versionKey:false
    
})

const Post = mongoose.model("post",postSchema)

module.exports = Post