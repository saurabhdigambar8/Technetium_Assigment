const mongoose=require('mongoose')
const publisherSchema=new mongoose.Schema({
    name:{
         type:String,
         require:true
        },
    headQuarter:String
})
module.exports= mongoose.model("newPublisher",publisherSchema)