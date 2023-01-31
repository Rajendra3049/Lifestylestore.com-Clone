const express=require("express")
const mongoose=require("mongoose");
mongoose.set('strictQuery', false);
const cors = require('cors')

const {connection}=require("./config/db")
const {WomenRout}=require("./router/women.router")
const {MenRouter}=require("./router/men.routs")
const {signupRouter}=require("./router/signup.router")
const {LoginRouter}=require("./router/login.router")




const app=express() 
app.use(express.json());
app.use(cors())

app.use("/Women",WomenRout)
app.use("/men",MenRouter)
app.use("/signup",signupRouter)
app.use("/login",LoginRouter)



app.get("/",(req,res)=>{
    res.send({"msg":"serveris working"}) 
})





app.listen(8080, async () => { 
    await connection; 
    console.log("8080 is started");
  });  





