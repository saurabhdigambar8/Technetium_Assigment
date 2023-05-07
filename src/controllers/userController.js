const userModel=require("../models/userModel")

const createUser=async function(req,res){
    const data= req.body
    const bool=req.headers.isfreeappuser
    data.isFreeAppUser=bool
    // console.log(typeof bool);
    // console.log(data);
    const user=await userModel.create(data)
//    let userUpdate=await userModel.findByIdAndUpdate("user._id",{isFreeAppUser:bool}) we can add isFreeAppUser by this method or line no 6
    res.send(user)
}
module.exports.createUser=createUser

