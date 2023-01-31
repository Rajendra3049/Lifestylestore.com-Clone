const mongoose = require("mongoose");
const express = require("express");

const {MenModel}=require("../model/men.model")

const MenRouter=express.Router()


MenRouter.post("/",async(req, res, next) => {

 
  let payload=req.body;

  await MenModel.insertMany(payload)



      res.send("done")


  })
  MenRouter.delete("/:id",async(req,res)=>{
    try{
      const _id=req.params.id
    console.log('_id: ', _id); 
    let data=await MenModel.findByIdAndDelete({_id})
    res.send("Deleted")
    }catch(err){
      // console.log(err)
      res.send(err)
    }
  })

  MenRouter.get("/",async(req,res)=>{
  let data=await MenModel.find({})
  res.send(data) 
})
  module.exports={MenRouter};