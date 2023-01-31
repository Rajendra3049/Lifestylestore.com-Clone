const mongoose=require("mongoose");


const SignupSchema=mongoose.Schema({     
       email:String,
       Username:String,
       Password:String
})
const SignupModel=mongoose.model("signup",SignupSchema);

module.exports={SignupModel};
