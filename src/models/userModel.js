const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name:String,
    balance:{
        type:Number,
        default:100
    },
    address:String,
    age:Number,
    gender:{
        type:String,
        enum:["male","female","others"]
    },
    isFreeAppUser:Boolean   //mongoose.Schema.Types.Mixed
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users
