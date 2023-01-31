const mongoose=require("mongoose");


const MenSchema=mongoose.Schema({
    
        
        name: String,
        price:Number,
        images:[String],
        Overview: String
    
})
const MenModel=mongoose.model("Men",MenSchema);

module.exports={MenModel};
