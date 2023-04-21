const express = require('express');
const { route } = require('express/lib/application');
const { param } = require('express/lib/router');
const router = express.Router();

let MoviesArr=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
router.get('/movie',function(req,res){
    res.send(MoviesArr)
})
router.get('/movies/:indexNumber',function (req,res){
    let i=req.params.indexNumber
    if(i>=0&&i<MoviesArr.length){
    res.send(MoviesArr[i])}
    else{
        res.send("No is invalid plese enter valid number")
    }
})

const moviesArrOfObj=[ {
    id: 1,
    name: "The Shining"
   }, {
    id: 2,
    name: "Incendies"
   }, {
    id: 3,
    name: "Rang de Basanti"
   }, {
    id: 4,
    name: "Finding Nemo"
   }]
   
 router.get('/films',function(req,res){
    res.send(moviesArrOfObj)
 })
router.get('/films/:filmId',function(req,res){
   let i=req.params.filmId
   for(let j=0;j<moviesArrOfObj.length;j++){
     if(moviesArrOfObj[j].id==i){
        res.send(moviesArrOfObj[j])
     }
   }

 res.send("no movie exist with this id ")
})


module.exports = router;