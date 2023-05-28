const cardModel=require("../models/cardModel")
const mongoose = require("mongoose");
const ObjectId=mongoose.Types.ObjectId
const cardDataValidation=async function(req,res,next){
    try{
       const data=req.body
       const{cardType,customerName,status,vision,customerID}=data
       if(!cardType){
        return res.status(400).json({
            status:400,
            message:"cardType is required"
        })
        }else if(!customerName){
            return res.status(400).json({
                status:400,
                message:"customerName is required"
            })
         }else if(status&&(status!="A   ctive"||status!="inactive")){
            return res.status(400).json({
                status:400,
                message:"staus  is only ACTIVE OR INACTIVE"
            })
         }else if(!customerID){
            return res.status(400).json({
                status:400,
                message:"please enter customerId"
            })
         }
         else if(customerID){

             if(ObjectId.isValid(customerID)){
                 return res.status(400).json({
                     status:400,
                     message:"please enter valid customerId"
                 }) 
             }
            const customer=await cardModel.findById(customerID)
            if(!customer){
                return res.status(400).json({
                    status:400,
                    message:"There is no customer by this id"
                })
            }
         }else{
            next()
         }

    }catch(err){
       
    }
}
module.exports.cardDataValidation=cardDataValidation