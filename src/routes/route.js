const express = require('express');
const router = express.Router();
let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
 
router.post("/test-post", function(req, res) {
    let age=req.query.age
    console.log(age);
    let ans=[]
    for(let i=0;i<persons.length;i++){
      if(persons[i].age>age)  {
         persons[i].votingStatus=true
         ans.push(persons[i])
      }
    }

    res.send(  { data:ans , status: true }  )
})
module.exports = router;