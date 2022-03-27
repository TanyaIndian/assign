const express = require("express")


const Comment = require("../model/coment.model")

const autenticate = require("../middleware/authenticate")
const router = express.Router()


router.post("/",autenticate,async(req,res)=>{

try{
     const comment = await Comment.create(req.body)
     return res.status(201).send(comment)

}
catch(err){

    return res.status(201).send(err.message)


}

})
module.exports =router