const express = require("express");
const cors = require("cors");
const { userRoute } = require("./Router/UserRouter.js");
require("dotenv").config()

const app=express();

app.use(cors());
app.use(express.json()) //middleware to work with json data

app.use("/",userRoute)  

app.listen(process.env.PORT,async()=>{
    await connectToDatabase()
    console.log("Server Started on PORT NO:",process.env.PORT)
})