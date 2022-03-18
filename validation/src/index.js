const express = require("express")
const connect = require("./config/db")
const userController = require("./control/user.con")


const app = express()
app.use(express.json())


app.use("/user",userController)


app.listen(5000,async()=>
{
    await connect()
    console.log("listening at 5000")
})

