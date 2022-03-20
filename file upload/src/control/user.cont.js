let arr =[]
const fs = require('fs');
const path = require("path")
const express = require("express")
const User = require("../models/user.model")
const uploads = require("../middleware/upload")

router = express.Router()


function getFilesInDirectory() {
      console.log("\nFiles present in directory:");
      let files = fs.readdirSync(__dirname);
      files.forEach(file => {
        console.log(file);
      });
    }

    getFilesInDirectory();

    let count=0;
router.post("/",uploads.single("profilepic"),async(req,res)=>
{
    try{
        // req.body = {firstName: "Tanya",lastName:"Shri"}
       count++
        
        const user = await User.create(
            {
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                profilepic:req.file.path
            }
            
        )
       let val = user.profilepic[0]
        arr.push(val)
        if(count>1)
        {
            fs.unlink(arr[0], (err => {
                if (err) console.log(err);
                else {
                   
                  console.log("\nDeleted file: example_file.txt");
                
                  // Get the files in current directory
                  // after deletion
                  getFilesInDirectory();
                  arr.shift()
                }
              }));
        }

        return res.status(201).send(user)

       
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
  
})

router.post("/multiple",uploads.any("profilepic"),async(req,res)=>
{
    try{
        const filepath = req.files.map((file)=>
        {
           return file.path
        })
        const user = await User.create(
            {
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                profilepic:filepath
            }
        )
        return res.status(201).send(user)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
  
})
router.get("/",async(req,res)=>
{
    try{
        const user = await User.find().lean().exec()
        return res.status(201).send(user)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
  
})

module.exports = router


// const fs = require('fs');
  
// // Get the files in current directory
// // before deletion
// getFilesInDirectory();
  
// // Delete example_file.txt
// fs.unlink("example_file.txt", (err => {
//   if (err) console.log(err);
//   else {
//     console.log("\nDeleted file: example_file.txt");
  
//     // Get the files in current directory
//     // after deletion
//     getFilesInDirectory();
//   }
// }));
  
// // Function to get current filenames
// // in directory with specific extension
// function getFilesInDirectory() {
//   console.log("\nFiles present in directory:");
//   let files = fs.readdirSync(__dirname);
//   files.forEach(file => {
//     console.log(file);
//   });
// }