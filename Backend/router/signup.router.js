const mongoose = require("mongoose");
const express = require("express");

const {SignupModel}=require("../model/signup.model")

const signupRouter=express.Router()

signupRouter.get("/",(req,res)=>{
    res.send("signup working")
})
signupRouter.post("/",async(req, res) => {

    let payload=req.body
    // console.log(payloade)
    await SignupModel.insertMany(payload)
    res.send({"msg":"user Created succesfully"}) 
}) 
module.exports={signupRouter};