const express =  require("express");
const { getUser, registerUser, loginUser } = require("../Controllers/userControllers.js");

const userRoute = express.Router();

userRoute.post("/register",registerUser) // to register user 

userRoute.post("/login",loginUser) // to login user  

module.exports = { userRoute}