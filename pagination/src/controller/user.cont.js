const express =require("express")
const User = require("../models/user.model")
const transporter = require("../config/mail")

const router = express.Router()

router.get("/",async(req,res)=>
{
    try{
        const user = await User.find().lean().exec()
        return res.status(200).send(user)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
   
})



router.post("/",async(req,res)=>
{

    try{
        const user = await User.create(req.body)
      
       await transporter.sendMail({
            from: '"Fred Foo 👻"anisha" <foo@example.com>', // sender address
            to: user.email, // list of receivers
            subject: `Welcome to ABC system ${user.firtName}`, // Subject line
            text: `Hi ${user.firtName} Please confirm your email address`, // plain text body
            html: `<b>Hello ${user.firtName} Please confirm your email address</b>`, // html body
          });
         res.status(200).send({message:"email is created suceesfully"})

       
          await transporter.sendMail({
            from: '"Fred Foo 👻"anisha" <foo@example.com>', // sender address
            to: "admin1@m , admin2@m , admin3@m , admin4@m , admin5@m", // list of receivers
            subject: user.firtName,  // Subject line
            text: ` ${user.firtName} welcome`, // plain text body
            html: `<b>Hello ${user.firtName} welcome</b>`, // html body
          });
           res.status(200).send({message:"posted to all admin"})
        
    }
    catch(err)
    {
        res.status(500).send(err.message)
    }
    
    
     
   
})




router.get("/",async(req,res)=>{
    try {

        const page =req.query.page || 1
        const pagesize=req.query.pagesize || 10

        const skip=(page-1)*pagesize
        const user = await User.find().skip(skip).limit(pagesize).lean().exec()

        const totalPages =Math.ceil((await User.find().countDocuments())/pagesize)
        
    return res.status(201).send({user,totalPages})
    }
 catch (error) {
    return res.status(500).send(error.message)
}

}
)
module.exports=router


// const { sendMail, adminMail } = require("../uitil");

// router.post("", async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     // console.log(user);

//     await sendMail({
//       from: "admin@student.com", // sender address
//       to: user.email, // list of receivers
//       subject: `Welcome to ABC system ${user.firtName} ${user.lastName}`, // Subject line
//       text: `Hi ${user.firtName}, Please confirm your email address`, // plain text body
//       html: `<h1>Hi ${user.firtName}, Please confirm your email address<h1>`, // html body
//     });

//     await adminMail({
//       from: "mainAdmin@gmail.com",
//       to: "admin1@m , admin2@m , admin3@m , admin4@m , admin5@m",
//       subject: `${user.firtName} ${user.lastName} has registered with us`,
//       text: `Please welcome ${user.firtName} ${user.last_name}`,
//       html: `<h1>Welcome ${user.firtName}<h1>`,
//     });

//     res.send("Hi there!");
//   } catch (err) {
//     console.log(err);
//   }
// });

