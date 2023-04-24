const express = require('express');
const { route } = require('express/lib/application');
const { param } = require('express/lib/router');
const router = express.Router();

let arr=[1,2,3,5,6,7] 
router.get('/sol1',function(req,res){
  let sum=7*(7+1)/2 //n(n+1)/2
  let arrsum=0
  for(let i=0;i<arr.length;i++){
    arrsum=arrsum+arr[i]
  }
  let missingNum=sum-arrsum 
    res.send({data:missingNum})
})
//===========2nd Api

 let arr2=[33, 34, 35, 37, 38]
router.get('/sol2',function(req,res){
  let sum=6*(33+38)/2 //n(first+last)/2 
  let arrsum=0
  for(let i=0;i<arr2.length;i++){
    arrsum=arrsum+arr2[i]
  }
  let missingNum=sum-arrsum 
    res.send({data:missingNum})
})



module.exports = router;