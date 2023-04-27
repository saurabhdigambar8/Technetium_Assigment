const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    year:Number,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPages:Number,
    stockAvailable:Boolean

}, { timestamps: true });


module.exports = mongoose.model('Book2', bookSchema) 


