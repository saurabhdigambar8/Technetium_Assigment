const orderModel=require("../models/orderModel")
const userModel=require("../models/userModel")
const productModel=require("../models/productModel")
const ObjectId=require("mongoose").Types.ObjectId

const createOrder=async function (req,res){
   
    let data=req.body
    let id=data.userId
    const userDetails=await userModel.findById(id)

    let userCatagory=userDetails.isFreeAppUser
    data.isFreeAppUser=userCatagory
    if(userCatagory){
        const order=await orderModel.create(data)
        res.send(order)
    }else{
        let idd=data.productId
        const productDetails=await productModel.findById(idd)
        const userDetails=await userModel.findById(id)
        const productPrice=productDetails.price
        const userBalence=userDetails.balance
        if(productPrice>userBalence){
            res.send("Insufficient balance")
        }else{
            let a=userBalence-productPrice
            let user=await userModel.findByIdAndUpdate(data.userId,{balance:a})
            data.amount=productPrice
            let order=await orderModel.create(data)
            res.send(order)
        }

    }
}

let getOrder=async function(req,res){
    let data=await orderModel.find().populate("userId productId")
    res.send(data)
}

module.exports.createOrder=createOrder
module.exports.getOrder=getOrder
