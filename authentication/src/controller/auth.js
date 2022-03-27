// const express = require("express")
const jwt = require("jsonwebtoken")
const uploads = require("../middleware/upload")
const path = require("path")

const User = require("../model/user.model")

const { body, validationResult } = require('express-validator');
const generatetoken = (user)=>
{
  return jwt.sign({user},"tanya")
}


const register = async(req,res)=>
{
    try{

        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }



     let user = await User.findOne({email:req.body.email}).lean().exec()
     if(user)
     {
         return res.status(201).send({message:"already present"})
     }
     else{
         const token = generatetoken(user)
         user = await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            age:req.body.age,
            email:req.body.email,
            password:req.body.password,
            profileImages:req.file.path}
         )
         return res.status(201).send({user,token})
     }
    }
    catch(err)
    {
        return res.status(201).send({message:err.message})
    }
}

const login = async(req,res)=>
{
    try{

     let user = await User.findOne({email:req.body.email})
     if(!user)
     {
         return res.status(201).send({message:"wrong credential"})
     }

     const match = user.checkPassword(req.body.password)
 
  if(!match)
  {
      return res.status(400).send({message:"wrong email or password"})
  }
    
         const token = generatetoken(user)
        
         return res.status(201).send({user,token})
     
    }
    catch(err)
    {
        return res.status(201).send({message:err.message})
    }
}
module.exports = {register,login}