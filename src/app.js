const express = require("express")
const app  = express();
const {connectDb}=require("./config/database");
const User = require("./models/user")
app.use(express.json());
app.post("/signup",async (req,res)=>{
   // Creating a new instance of User model
    const user = new User(req.body)
     console.log(user)
   try{
      await user.save();
   res.send("User Added sucessfully")

   } catch(err){
      res.status(400).send("Error saving the user:" + err.message);

   }
   
})
// findone API
app.get("/user",async(req,res)=>{
   const userEmail = req.body.emailsId;
   try{
      const user = await User.findOne({emailsId:userEmail})
      // console.log(user)
      if(!user){
         res.status(404).send("user not find")
      }
      else{
         res.send(user)
      }
   } catch(err){
      res.status(401).send("Something went wrong");
   }
})
/// to find the data of all user GET/feed API


app.get("/feed",async(req,res)=>{
   try{
   const users = await User.find({})
   res.send(users) 
   }catch(err){
      res.status(401).send("something wents wrong")

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
