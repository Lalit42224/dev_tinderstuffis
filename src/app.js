const express = require("express")

const app  = express();
// app.use("/test",(req,res)=>{
//          res.send("test h tera bro")
// });


app.get("/user",(req,res)=>{
         res.send("it is get Api")
})
app.post("/user",(req,res)=>{
         res.send("data post ho gya")
})
app.put("/user",(req,res)=>{
         res.send("data put kr to diya")
})
app.patch("/user",(req,res)=>{
         res.send("patch kiya okay")
})
app.delete("/user",(req,res)=>{
         res.send("tera naam delete h n")
})



app.listen(4000,()=>{
         console.log("server is sucssfully listening on port 3000")
})