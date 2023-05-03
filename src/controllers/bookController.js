const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const ObjectId = require('mongoose').Types.ObjectId


const createBook= async function (req, res) {
    let book = req.body
     if( !book.author_id || !book.publisher_id){

          if(!book.author_id){
               return  res.send({msg:"Author_id is Misssing its required "})
            }
         else{
            return  res.send({msg:"Publisher_id is misssing its required"})
         }   
      }
   else if(!ObjectId.isValid(book.author_id)||!ObjectId.isValid(book.publisher_id)){
       if(!ObjectId.isValid(book.author_id)){
        return  res.send({msg:"Invalid AuthorId"})
       }else{
        return  res.send({msg:" Invalid Publishers Id"})
       }
     }
    else{
        let aMatch= await authorModel.findOne({_id:book.author_id})
        let pMatch= await publisherModel.findOne({_id:book.publisher_id})
        if(aMatch==null||pMatch==null){
            if(aMatch==null){
               return  res.send({msg:"AuthorId is not match"})
            }else{
               return  res.send({msg:" Publishers Id not Match "})
            }
        }else{
            let bookCreated = await bookModel.create(book)
            res.send({data: bookCreated})
        }
    }
 }

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let book = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: book})

}

const book=async function (req,res){
    let hardCoverFalse= await bookModel.updateMany({},{$set:{isHardCover:false}},{upsert:true})
    let hardCoverTrue=await bookModel.updateMany({publisher_id:{$in:["64510c8b9418cf339b68ff44","6450e5d3679047953e33d96a"]}},{isHardCover:true},{upsert:true})
    let data=await bookModel.find().populate("author_id")
    let ratingarr=data.filter(ele=>ele.author_id.rating>3.5)
    let priceArr=ratingarr.map(ele=>ele._id)
   let priceUpdate=await bookModel.updateMany({_id:{$in:priceArr}},{$inc:{price:10}})

    let allbook=await bookModel.find().populate('author_id').populate('publisher_id')
    res.send ({data:allbook})
}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.book=book
