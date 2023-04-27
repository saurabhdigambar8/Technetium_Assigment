const bookModel=require("../models/bookModel")


const createBookData=async function(req,res){
    let data=req.body
    let saved=await bookModel.create(data)
    res.send({msg:saved})
}
const getBookData= async function(req,res){
    let allBook=await bookModel.find()
    res.send({msg:allBook})
}
module.exports.createBookData=createBookData
module.exports.getBookData=getBookData