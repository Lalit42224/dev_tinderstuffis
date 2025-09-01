const mongoose = require("mongoose")


const connectDb = async ()=>{
         await mongoose.connect(
                  // "mongodb://localhost:27017/denTinder"
                 "mongodb+srv://namastedev:ihLKCzmpGR3ZFXSz@namstenode.lriwaaj.mongodb.net/devTinder"
         );
};

module.exports = {
         connectDb
}
