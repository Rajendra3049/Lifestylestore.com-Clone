const mongoose=require("mongoose");


const WomenSchema=mongoose.Schema({
    
        
        name: String,
        price:Number,
        images:[],
        Overview: String
    
})
const WomenModel=mongoose.model("Women",WomenSchema);

module.exports={WomenModel};
