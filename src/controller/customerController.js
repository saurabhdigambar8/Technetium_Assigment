const customerModel = require("../models/customerModel")

const getCustomer=async function(req,res){
  try{
    const customer=await customerModel.find({status:"ACTIVE"})
    if(customer.length > 0){
       return res.status(200).send({data:customer})
    }else{
       return res.status(400).send("Not Found Any customer")
    }
  }catch(err){
    return res.status(500).send(err.message)
  }

}

const deleteCustomer = async function(req,res){
   try{
    const customer=await customerModel.findByIdAndDelete(req.params.id)
    if(customer){
       return res.status(200).send({data:customer})
    }else{
       return res.status(400).send("Not Found Any customer")
    }
   }catch(err){
    return res.status(500).send(err.message)
   }
}

const createCustomer = async function(req,res){
    try{
        const data=req.body
        
        const noOfCustomers = await customerModel.count()
      if(noOfCustomers<10){
        data.customerId="C00"+noOfCustomers
      }if(noOfCustomers>=10&&noOfCustomers<100){
        data.customerId="C0"+noOfCustomers
      }else{
        data.customerId="C"+noOfCustomers
      }
        const customer=await customerModel.create(data)
        if(customer){
            return res.status(200).send({data:customer})
        }else{
            return res.status(400).send("Not Found Any customer")
        }
    }catch(err){
        response.send(err.message)
    }
}

module.exports.getCustomer=getCustomer
module.exports.deleteCustomer=deleteCustomer
module.exports.createCustomer=createCustomer


