const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body
    if(!data.author_id){
        return res.send("Author_Id required")
    }
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find()
     res.send({msg:allBooks})
}
const booksByChetanBhagat=async function(req,res){
    let authorData=await AuthorModel.findOne({author_name:"Chetan Bhagat"})
    let allBooks= await BookModel.find({author_id:authorData.author_id}).select({name:1})
    res.send({allBooks})
   }

const findAndUpdate =async function(req,res){
    let book=await BookModel.findOneAndUpdate({name:"Two states"},{price:100},{new:true})
    let authorData=await AuthorModel.find({author_id:book.author_id})
    let authourName=authorData.map(ele=>ele.author_name)
    res.send({
        author_name:authourName.join(),
        price:book.price
    })
}
const bookBet50to100=async function(req,res){
    let idarr= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    let authorid=idarr.map(ele=>ele.author_id)
   const name=await AuthorModel.find({author_id:{$in:authorid}}).select({author_id:1,author_name:1})
    res.send({name:name})
}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData

module.exports.findAndUpdate=findAndUpdate
module.exports.booksByChetanBhagat=booksByChetanBhagat
module.exports.bookBet50to100=bookBet50to100