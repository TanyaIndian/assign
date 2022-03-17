const express = require("express")
const router = express.Router()
const Eval = require("../model/eval.model")

router.get("/",async(req,res)=>
{
  try{
    const eval = await Eval.find().lean().exec()
    return res.status(200).send(eval)
  }
  catch(err)
  {
    return res.status(500).send(err.message)
  }
})

router.post("/",async(req,res)=>
{
  try{
    const eval = await Eval.create(req.body)
    return res.status(201).send(eval)
  }
  catch(err)
  {
    return res.status(500).send(err.message)
  }
})
router.get("/:id",async(req,res)=>
{
  try{
    const eval = await Eval.findById(req.params.id).populate({path:"studentid2",select:["currentBatch"],populate:{path:"userId",select:["firstName","lastName","gender"]} }).populate({path:"studentid1",select:["currentBatch"],
    populate:{path:"userId",select:["firstName","lastName","gender","dob"]} }).populate({path:"studentid3",select:["currentBatch"],
    populate:{path:"userId",select:["firstNmae"]} }).populate({path:"studentid2",populate:{path:"currentBatch",select:["batchName"]} }).populate({path:"studentid1",populate:{path:"currentBatch",select:["batchName"]} })
    .lean().exec()
    return res.status(200).send(eval)
  }
  catch(err)
  {
    return res.status(500).send(err.message)
  }
})
module.exports = router