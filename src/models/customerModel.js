const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
 firstName: {type: String, required: true,trim:true},
 lastName: {type: String, required: true,trim:true},
 mobileNumber: {type: String, required: true, trim:true,minlength: 10, maxlength: 10},
 DOB: {type: Date, required: true,trim:true},
 emailID: {type: String, required: true,trim:true},
 address:String,
 customerID: {type: String, required: true, trim:true,unique: true},
 status: {type: String, required: true, trim:true,default: 'ACTIVE'}

})

module.exports=mongoose.model('customer',customerSchema)