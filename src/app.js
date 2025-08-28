const express = require("express")
const app  = express();
const {connectDb}=require("./config/database");
const User = require("./models/user")
app.use(express.json());
app.post("/signup",async (req,res)=>{
   // Creating a new instance of User model
    const user = new User(req.body)
     console.log(user)
      // {
   //    firstName:"sumit",
   //    lastName:"sharma",
   //    emailsId:"sumitsharma8171@gmail.com",
   //    password:"sumitasharma",
     
   // }

   try{
      await user.save();
   res.send("User Added sucessfully")

   } catch(err){
      res.status(400).send("Error saving the user:" + err.message);

   }
   
})

connectDb().then(()=>{
         console.log("Database connection establised...");
         app.listen(4000,()=> {
         console.log("server is sucssfully listening on port 4000")
})
})
.catch((err)=>{
         console.log("Database cannot be connected!!")
})
