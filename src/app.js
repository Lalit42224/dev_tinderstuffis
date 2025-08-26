const express = require("express")

const app  = express();
app.use("/test",(req,res)=>{
         res.send("test h tera bro")
});

app.use("/user",(req,res) => {
         res.send("user h bhai tu")
})


app.listen(3000,()=>{
         console.log("server is sucssfully listening on port 3000")
})