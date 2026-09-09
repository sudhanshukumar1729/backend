const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async(req,res)=>{
    res.json({message:"register the user"});
    console.log("register the user");
});

const loginUser = asyncHandler(async(req,res)=>{
    res.json({message:"login the user"});
    console.log("login the user");
});

const currentUser = asyncHandler(async(req,res)=>{
    res.json({message:"current user details"});
    console.log("current user details");
});

module.exports = { registerUser,loginUser,currentUser };