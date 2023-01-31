const mongoose=require("mongoose");
require("dotenv").config();

let mong_url=process.env.mong_url
// console.log(mong_url);

const connection=mongoose.connect(mong_url)


module.exports={connection}
