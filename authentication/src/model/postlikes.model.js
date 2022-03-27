// PostLike Model
// - postId ( references post collection)
// - userId ( references user collectio
const mongoose = require("mongoose")

const postlikesSchema = new mongoose.Schema({
    
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    postId:{type:mongoose.Schema.Types.ObjectId,ref:"post",required:true}
    


}
,
{
    timestamps:true,
    versionKey:false
    
})

const Postlikes = mongoose.model("postlikes",postlikesSchema)

module.exports = Postlikes