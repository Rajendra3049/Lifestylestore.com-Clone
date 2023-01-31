const mongoose = require("mongoose");
const express = require("express");

const {SignupModel}=require("../model/signup.model");
const { query } = require("express");

const LoginRouter=express.Router()

LoginRouter.get("/:email",async(req,res)=>{
     
   try{
    const input=req.params
    const email=input.email
    const data=await SignupModel.find({email})
    if(data==undefined){
        res.send({"msg":"login failed"})
    }else{
        res.send(data);
    }
   }catch(err){
    res.send (err)
   }
    // res.send("signup working")
})
LoginRouter.post("/",async(req, res) => {

    let payload=req.body
    const email=payload.email
    const data=await SignupModel.find({email})
    res.send(data) 
}) 
module.exports={LoginRouter};