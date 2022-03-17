const express = require("express")
const router = express.Router()
const Sub = require("../model/sub.model")

router.get("/",async(req,res)=>
{
  try{
    const sub = await Sub.find().lean().exec()
    const arr = []
    sub.forEach((elem) => {
        
    arr.push(elem.marks)
    console.log(elem)
    });

    const maxmarks = arr.indexOf(Math.max(...arr))
    console.log(arr[maxmarks])
    console.log(sub[maxmarks]._id)
    return res.status(200).send(sub[maxmarks]._id)
  }
  catch(err)
  {
    return res.status(500).send(err.message)
  }
})
router.post("/",async(req,res)=>
{
  try{
    const sub = await Sub.create(req.body)
    return res.status(201).send(sub)
  }
  catch(err)
  {
    return res.status(500).send(err.message)
  }
})
router.get("/:id",async(req,res)=>
{
  try{
    const sub = await Sub.findById(req.params.id).populate({path:"studenyId",populate:{path:"userId",select:["firstName","lastName","gender"]} }).
    populate({path:"evalId",select:["date"],populate:{path:"batchId",select:["batchName"]} })
    return res.status(201).send(sub)
  }
  catch(err)
  {
    return res.status(500).send(err.message)
  }
})
module.exports = router