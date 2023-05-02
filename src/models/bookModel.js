const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "newAuthor"
    }, 
    price: Number,
    rating: Number,
    publisher_id:{
        type:ObjectId,
        ref:"newPublisher"
    }
        

});


module.exports = mongoose.model('newBook', bookSchema)
