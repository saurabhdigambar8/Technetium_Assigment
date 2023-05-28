const mongoose = require('mongoose')
const CardSchema=new mongoose.Schema({
    cardNumber:{
        type:String,
        unique:true,
    },cardType:{
        type:String,
        enum:['REGULAR','SPECIAL',],trim:true
    },
    customerName:{type:String,require:true,trim:true},
    status:{type:String,enum:['ACTIVE','INACTIVE'],default:"ACTIVE",trim:true},
    vision:String,
    castomerID:{
        type:String,
        ref:"customer",trim:true
    }
})
module.exports = mongoose.model('card',CardSchema)