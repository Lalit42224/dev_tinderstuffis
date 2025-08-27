const express = require("express")
const app  = express();
const {adminAuth,userAuth} = require("./middlewares/auth")
app.use("/admin",adminAuth);
app.use("/user/login",(req,res)=>{
   res.send("user login h ye to")
});
app.use("/user/userInfo",userAuth,(req,res)=>{
   res.send("user h ye to")
})

app.use("/admin/getUserInfo",(req,res,next)=>{
   res.send("amdin info")
           ("user Data")
           next()
             
}),

app.use("/admin/imInfo",(req,res)=>{
   // console.log("ye to admin Info h")
   res.send("admin info h")
})



app.listen(4000,()=>{
         console.log("server is sucssfully listening on port 4000")
})