const express = require("express")
const path = require("path")

const Post = require("../model/post.model")
const uploads = require("../middleware/upload")
const autenticate = require("../middleware/authenticate")
const router = express.Router()


router.post("/",uploads.single("image"),autenticate,async(req,res)=>{

try{
     const post = await Post.create({
        body:req.body.body,
        likes:req.body.likes,
       
        image:req.file.path,
        userId : req.body.userId
     })
     return res.status(201).send(post)

}
catch(err){

    return res.status(201).send(err.message)


}

})

module.exports = router
