const express = require("express")
const router = express.Router()
const Student = require("../model/student.model")

router.get("/",async(req,res)=>
{
  try{
    const student = await Student.find().lean().exec()
    return res.status(200).send(student)
  }
  catch(err)
  {
    return res.status(500).send(err.message)
  }
})
router.post("/",async(req,res)=>
{
  try{
    const student = await Student.create(req.body)
    return res.status(201).send(student)
  }
  catch(err)
  {
    return res.status(500).send(err.message)
  }
})
router.get("/:id",async(req,res)=>
{
  try{
    const student = await Student.findById(req.params.id).populate({path:"studentId",select:["currentBatch"],populate:{path:"userId",select:["firstName","lastName","gender"]} })
    return res.status(200).send(student)
  }
  catch(err)
  {
    return res.status(500).send(err.message)
  }
})
module.exports = router