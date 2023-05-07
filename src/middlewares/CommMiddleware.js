//const orderModel=require("../models/orderModel")
const userModel=require("../models/userModel")
const productModel=require("../models/productModel")
const ObjectId=require("mongoose").Types.ObjectId

const headerCheker=function(req,res,next) {
    let heder=req.headers.isfreeappuser
   // console.log(heder);
    if(heder==undefined){
        return res.send("isFreeAppUser in header is mendatory")
    }else{
        next()
    }
}
const orderChecker=async function(req,res,next){
    const data=req.body
    let id=data.userId
    let idd=data.productId
   // console.log(id,idd+"idde od dddd");
    const userCheck=await userModel.findById(id)
    const productCheck=await productModel.findById(idd)
    if(!data.userId) res.send("userId missing")
    else if(!data.productId) res.send("productId missing")
    else if(!(ObjectId.isValid(id))) res.send("invalid userId")
    else if(!(ObjectId.isValid(idd))) res.send("invalid productId")
    else if(userCheck==null) res.send("user  is not Found")
    else if(productCheck==null) res.send("product is not Found")
    else{
    //  const order=await orderModel.create(data)
    //  res.send(order)
    next()
    }
 }
 module.exports.headerCheker=headerCheker
 module.exports.orderChecker=orderChecker