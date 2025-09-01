const express = require("express")
const app  = express();
const {connectDb}=require("./config/database");
const User = require("./models/user")
app.use(express.json());
app.post("/signup",async (req,res)=>{
   // Creating a new instance of User model
    const user = new User(req.body)
   //   console.log(user)
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



// using get API bi findbyId()
app.get("/id",async (req,res)=>{
   const userId = req.body._id;
   try{
      const byId = await User.findById({_id:userId})
      if(!byId){
         res.status(401).send("user not found")
      }else{
         res.send(byId);
      }
   } catch (err){
      res.status(400).send("something wents wrong")

   }
})


/// delete API
app.delete("/user",async (req,res)=>{
   const userId=req.body._id;
   try{
       const user = await User.findByIdAndDelete({_id:userId})
       res.send("user deleted sucessfull")
   }catch(err){
       res.status(401).send("something wents wrong")
   }
})


/// update API
app.patch("/user/:_id", async (req,res)=>{
   const userId = req.params?._id;
   const data = req.body;
  
   try {
      const Allowed_Upadate = ["photurl","age","gender","skills","about"]
         const isAllowed_Updates = Object.keys(data).every((k) =>
            Allowed_Upadate.includes(k)
         );
         if(!isAllowed_Updates){
            throw new Error("Update not allow")
         };
         if((data. skills) && data.skills.length>10){
            throw new Error("skills can not more than 10")
         }
      const user = await User.findByIdAndUpdate(userId, data,{
         runValidators:true,  
      });   
      console.log(user);
        res.send("update sucessfully")
   }
  catch(err){
      res.status(401).send("Upadted User Failed:" + err.message)

   }
})


/// update using emails
app.patch("/useremails", async (req,res)=>{
   const query = req.body.emailsId;
   const data = req.body;
   try{
      const user = await User.findOneAndUpdate({emailsId:query},data,{
         runValidators:true,
      })
      res.send("updated by emails ")
      // console.log(user);

   } catch (err){
      res.status(401).send("Updation failed:" + err.message)
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
