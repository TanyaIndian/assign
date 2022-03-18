const express = require("express")
const { body, validationResult } = require('express-validator');

const User = require("../model/user.model")

const router = express.Router()

router.post("/",body("firstName").not().isEmpty().withMessage("firstName cannot be empty"),body("email").isEmail().withMessage("email should be valid"),
body("pincode").custom((value)=>
{
    console.log(value.length)
    if(value.length!=6)
    {
        
        throw new Error("Incorrect age provided")
    }
    else{
        return true
    }
}).withMessage("pincode should be of 6 digit"),body("age").custom((value)=>
{
    if(value<0 || value>100)
    {
        throw new Error("Incorrect age provided")
    }
    else{
        return true
    }
}),body("gender").custom((value)=>
{
    if(value=="female" || value=="male" || value=="other")
    {
        return true
    }
    else{
        throw new Error("please choose correct gender")
    }
}),
 async(req,res)=>
{
    try{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

        const user = await User.create(req.body)
    return res.status(201).send(user)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
    
})

router.get("/",async(req,res)=>
{
    try{
        const user = await User.find().lean().exec()
    return res.status(201).send(user)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
    
})

module.exports=router