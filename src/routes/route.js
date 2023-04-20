const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

// const commonFile = require('./common')
// const myUnderscore = require('underscore')

// router.get('/cohorts', function (request, response){
//     // logic to get the cohorts from database
//     // logic tp get only the active cohorts
//     // logic to get only the cohort with a size than 50
//     // logic to get only the backend cohorts
//     response.send(['technetium','nobelium'])
// })

// router.get('/students', function(req, res){
//     // receive or access the query params in the code
//     // write a logic on these query params
//     // city, score
//     console.log(req.query)
//     let requestedCity = req.query.city
//     let sortField = req.query.sort
//     // logic to get students
//     res.send(["Sabiha","Neha","Akash","Sonali"])
// })

// router.get('/students/:studentName', function(req, res) {
//     console.log(req.params.studentName)
//     /// go to database and search for studentName student
//     // store the data found in this variable - studentDetails
//     //res.send({data: studentDetails})
//     res.send('student data')
// })
let MoviesArr=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
router.get('/movie',function(req,res){
    res.send(MoviesArr)
})
router.get('/movies/:indexNumber',function (req,res){
    let i=req.params.indexNumber
    if(i>0&&i<=MoviesArr.length){
    res.send(MoviesArr[i-1])}
    else{
        res.send("No is invalid")
    }
})




module.exports = router;