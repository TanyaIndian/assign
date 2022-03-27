const express = require("express")
const uploads = require("./middleware/upload")
const { body, validationResult } = require('express-validator');
const connect = require("./config/db")
const {register, login} = require("./controller/auth")
const postcontroller = require("./controller/post.cont")
const commentcontroller = require("./controller/comment.cont")
const app = express()
app.use(express.json())

app.post("/register",uploads.single("profileImages"),body("firstName").custom((value)=>
{
    console.log(value)
    if(value.length<3 || value.length>30)
    {
        throw new Error("write correct name")
    }
    else{
        return true;
    }
}),body("age").custom((value)=>
{
    if(value<3 || value>150)
    {
        throw new Error("write correct age")
    }
    else{
        return true;
    }
}),register)

app.post("/login",login)

app.use("/post",postcontroller)
app.use("/comment",commentcontroller)



app.listen(5000,async()=>
{
    await connect()
    console.log("5000")
})