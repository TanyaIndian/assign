const express = require("express")

const app = express()
const connect = require("./config/db")
app.use(express.json())
const usercontroller = require("./controller/user.cont")
const transporter = require("./config/mail")

app.use("/user",usercontroller)


  













app.listen(5000,async()=>
{   
    await connect()
    console.log("port 5000")
})