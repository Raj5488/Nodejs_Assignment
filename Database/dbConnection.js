const mongoose = require("mongoose");
const connectToDatabase = async()=>{
    mongoose.connect(process.env.DATA_URL).then((conn)=>{
        console.log("Database Connected Successfully");
    }).catch((err)=>{
        console.log("Error Connted to DB ".err.message);
    })
}

module.exports ={connectToDatabase};




