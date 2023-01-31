const mongoose = require("mongoose");
const express = require("express");

const {WomenModel}=require("../model/Women.model")

const WomenRout=express.Router()


WomenRout.post("/",async(req, res, next) => {

 
  let payload=req.body;

  await WomenModel.insertMany(payload)


      res.send("done")


  })

  WomenRout.get("/",async(req,res)=>{
  let data=await WomenModel.find({})
  res.send(data)
})

WomenRout.delete("/:id",async(req,res)=>{
  try{
    const _id=req.params.id
  console.log('_id: ', _id); 
  let data=await WomenModel.findByIdAndDelete({_id})
  res.send("Deleted")
  }catch(err){
    // console.log(err)
    res.send(err)
  }
})
  module.exports={WomenRout};

  