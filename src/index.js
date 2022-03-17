const express = require("express")
const app = express();
app.use(express.json())
const usercontroller = require("./controllers/user.cont")
const studentcontroller = require("./controllers/studentcon")
const batchcontroller = require("./controllers/batch.con")
const evalcontroller = require("./controllers/eval.con")
const subcontroller = require("./controllers/sub.con")
app.use("/sub",subcontroller)
app.use("/eval",evalcontroller)

app.use("/batch",batchcontroller)

app.use("/user",usercontroller)
app.use("/student",studentcontroller)
module.exports = app