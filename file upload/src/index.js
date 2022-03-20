const express =  require("express")
const connect = require("./config/db")
const app = express()
app.use(express.json())
const userController = require("./control/user.cont")





app.use("/user",userController)
app.listen(5000,async()=>
{
    await connect()
    console.log("listening at 5000")
})
