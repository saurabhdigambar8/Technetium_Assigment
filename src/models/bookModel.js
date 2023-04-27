const mongoose=require("mongoose")
const bookSchema= new mongoose.Schema({
    bookName:{type:String,require:true},
    authorName:{type:String,require:true},
    category:{type:String,require:true},
    year:{type:Number,require:true}
})
module.exports=mongoose.model("book",bookSchema)