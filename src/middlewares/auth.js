 const adminAuth = (req,res,next)=>{
 console.log("checking Auth!!")
   const tokens = "xyz"
   const isAdminAuthorised = tokens ==="xyz"
   if(!isAdminAuthorised){
      res.send("unautharised person u r")
   }
   else{
      next()
   }
}
 const userAuth = (req,res,next)=>{
 console.log(" User checking Auth!!")
   const tokens = "xyz"
   const isAdminAuthorised = tokens ==="xyz"
   if(!isAdminAuthorised){
      res.send("unautharised person u r")
   }
   else{
      next()
   }
}


module.exports = {
 adminAuth,
 userAuth

}