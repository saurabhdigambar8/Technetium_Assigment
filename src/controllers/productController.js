const productModel=require("../models/productModel")

const createProduct=async function(req,res){
    let data= req.body
    const product=await productModel.create(data)
    res.send({data:product})
}
module.exports.createProduct=createProduct