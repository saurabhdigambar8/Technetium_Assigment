const mongoose=require("mongoose")
const ObjectId=mongoose.Schema.Types.ObjectId
const orderSchema=new mongoose.Schema({
  //userId:ObjectId,
  userId:{
    type:ObjectId,
   ref:"User"
  },
 // productId:ObjectId,
 productId:{
  type:ObjectId,
  ref:"Product"
 },
  amount:{type:Number,default:0},
  date:{
    type:Date,
    default:Date.now
  },
  isFreeAppUser:Boolean
})
module.exports=mongoose.model("Order",orderSchema)