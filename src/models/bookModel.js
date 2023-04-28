const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true
    },
    authorName:  {
        type: String,
        require: true
    },
    tags: [String],

    year: {type:Number,
        default:2021},
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPages: Number,
    stockAvailable: Boolean

}, { timestamps: true });


module.exports = mongoose.model('BookCollection', bookSchema)


