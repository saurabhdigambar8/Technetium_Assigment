const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    authorName: {
        type:String,
        require:true},
    age:Number,
    address:String,
    rating:Number

});

module.exports = mongoose.model('newAuthor', authorSchema)
