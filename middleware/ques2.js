const express = require("express")

const app = express()

app.get("/book/:name",singleBook,(req,res)=>
{
    res.send({bookName :req.bookname})
})

function singleBook(req,res,next)
{
    req.bookname = req.params["name"]
    
    next()
    console.log(req.bookname)
}

app.listen(5000,()=>
{
    console.log("listening at port 5000")
})