const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const userAuth = async function (req, res,next) {
   let token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "functionup-technetium-secret-key");
      if (!decodedToken){
        return res.send({ status: false, msg: "token is invalid" });
      }
      let userId = req.params.userId;
      let userDetails = await userModel.findById(userId);
      if (!userDetails){
      return res.send({ status: false, msg: "No such user exists" });}
      if(userId!=decodedToken.userId){
        res.send("you are not authorizes")
      }
      // req.tok=decodedToken
      // req.idd=userId
      // req.userId=req.params.userId;
      // req.decodedToken=decodedToken
      next()    
  };
  // const autho=function (req,res,next){
  //   console.log(req.userId);
  //   console.log(req.decodedToken.userId);
  //   if(req.userId==req.decodedToken.userId){

  //     next()
  //   }  
  //   res.send({status:false,msg:"You are not authorize"})
  // }
  module.exports.userAuth = userAuth
  //module.exports.autho=autho
  