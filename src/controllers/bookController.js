const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList=async function(req,res){
    let allBook=await BookModel.find().select({ bookName: 1, authorName: 1})
    res.send({msg:allBook})
}
const getBooksInYear=async function(req,res){
    let year=req.body.year
    //let year=req.query.year
    
    let Book=await BookModel.find({year:year})
    res.send({msg:Book})
}
const getParticularBooks=async function(req,res){
     let data=req.body
    // console.log(data);
     let allBook=await BookModel.find({
        $or:[{authorName:data.authorName},{bookName:data.bookName},
           {"prices.indianPrice":data.indianPrice},{"prices.europePrice":data.europePrice},
           {tags:{$in:[data.tags]}}
            ,{totalPages:data.totalPages},{stockAvailable:data.stockAvailable}]
    })
    res.send({msg:allBook})
}
const getXINRBooks=async function(req,res){
    let allBook=await BookModel.find({"prices.indianPrice":{$in:["100INR","200INR","500INR"]}})
    res.send({msg:allBook})
}
const getRandomBooks=async function(req,res){
    let allBook=await BookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg:allBook})
}


    // let allBooks= await BookModel.find( ).count() // COUNT

    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND
    
    // let allBooks= await BookModel.find( { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 
    
    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    // sales : { $in: [10, 17, 82] }
    
    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})
    
    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
    //  let allBooks= await BookModel.findOne( {sales: 10}) 
    //  let allBooks= await BookModel.find( {sales: 10}) 
    
    

    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks= await BookModel.update(   
    //     {  sales: {$gt: 10}  }, //condition
    //     { $set: { isPublished: true} } // the change that you want to make
    //     ) 



    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 
    
    // ASYNC AWAIT
    
   

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks