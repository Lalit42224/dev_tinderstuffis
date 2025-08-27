const mongoose = require("mongoose")


const connectDb = async ()=>{
         await mongoose.connect(
                  "mongodb+srv://namastedev:ihLKCzmpGR3ZFXSz@namstenode.lriwaaj.mongodb.net/devTinder"
         );
};

module.exports = {
         connectDb
}
