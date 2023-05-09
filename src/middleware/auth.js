const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const userAuth = async function (req, res,next) {
    // let a=req.headers
    // console.log(a);
   let token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
   // console.log(token);
  
    let decodedToken = jwt.verify(token, "functionup-technetium-secret-key");
    //console.log("decoded ====",decodedToken);
    if (!decodedToken){
      return res.send({ status: false, msg: "token is invalid" });
    }
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
      //here i have to userid in req
     next()    
    //res.send({ status: true, data: userDetails });
    // Note: Try to see what happens if we change the secret while decoding the token
  };
  module.exports.userAuth = userAuth
  