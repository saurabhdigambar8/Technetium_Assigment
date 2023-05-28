const express=require('express')
const mongoose=require('mongoose')
const app=express() 
const route=require("./router/routes")
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/",route)
mongoose.connect('mongodb+srv://saurabhdigambar8:X1UED3V4eKh2u9M4@cluster0.tlt0rzr.mongodb.net/JaiKisan',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("mongodb is connected");
}).catch(err=>{console.log(err);});
app.listen(4000,()=>{
    console.log("server is running on 4000")
})