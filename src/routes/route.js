const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const logger=require('../logger/logger')
const helper=require('../util/helper')
const formatter=require('../validator/formatter')
//=============================
const lodash=require('lodash')
let arr=["jan","Feb",'Mar','Apr','May','Jun','july','Aug','Sep','Oct','Nov','Dec']

 let arrayof3month=lodash.chunk(arr,3)
//------------------------
let oddno=[1,3,5,7,9,11,13,15,17,19]
let oddNoUpto9=lodash.tail(oddno,1)
//--------------------------
let arr1=[1,2,3,4]
let arr2=[2,5,6,7]
let arr3=[5,8,9,0]
let arr4=[2,8,11,14]
let arr5=[1,4,15,9]
let uniqueArr=lodash.union(arr1,arr2,arr3,arr4,arr5)
//-----------------
let arrofobj=[["horror","TheShining"],["drama","Titanic"],['thriller','ShutterIsland'],['fantasy','PansLabyrinth']]
let obj=lodash.fromPairs(arrofobj)
//-----------------------------
  //==This route is for lodash modules.
router.get('/test-you', function (req, res) {
    console.log(...arrayof3month)
    console.log(oddNoUpto9);
    console.log(uniqueArr);
    console.log(obj);
    res.send('Hello there, welcome to this application!')
});
//==========================================
router.get('/test-me',function(req,res){
    console.log(logger.welcome());
   console.log(helper.pritDate(),helper.printMonth(),helper.getBatchInfo());
  console.log(formatter.tri(),formatter.toUpper(),formatter.toLower());
    res.send("this is done")
})

module.exports = router;