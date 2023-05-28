const customerModel=require("../models/customerModel")
const checkCustomer=async function(req,res,next){
    try{
        let {firstName,lastName,mobileNumber,DOB,emailID,customerID}=data,body
        if(!firstName&&!lastName&&!mobileNumber&&!DOB&&!emailID&&!customerID)
        {
            res.send("all fields are mendatory")
        }else{
            next()
        }
    }
    catch(err){
        res.status(500).send(err.message)
    }
}
module.exports.checkCustomer = checkCustomer