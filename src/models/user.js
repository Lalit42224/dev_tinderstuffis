const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
         firstName:{
                  type:String,
         },
         lastName :{
                  type:String,
         },
         emailsId:{
                  type:String,
         },
         age:{
                  type:String,

         },
         gendre:{
                  type:String,
         },
         password:{
                  type:String,

         },
});

// const User = mongoose.model("User",UserSchema)
// module.exports = User;
module.exports = mongoose.model("User",userSchema)