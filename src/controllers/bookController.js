const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    //============validation for author
    if(!book.author_id){
       return  res.send({msg:"Author_id is required"})
    }
        let data= await authorModel.findOne({_id:book.author_id})
        
     if(data==null)
       {
         return  res.send({msg:"Author_Id is invalid"})
        }
   //=================== validation for publisher
        if(!book.publisher_id){
            return  res.send({msg:"Publisher_id is required"})
         }
             let data2= await publisherModel.findOne({_id:book.publisher_id})
             
          if(data2==null)
            {
              return  res.send({msg:"Publisher_Id is invalid"})
             }
//============

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
 }

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: specificBook})

}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
