const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "newAuthor",
        require:true
    }, 
    price: Number,
    rating: Number,
    publisher:{
        type:ObjectId,
        ref:"newPublisher",
        require:true
    }
        

});


module.exports = mongoose.model('newBook', bookSchema)
