const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data= req.body
    if(!data.author_id){
        return res.send("Author_Id required")
    }
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const getAuthorsData= async function (req, res) {
    let allUsers= await AuthorModel.find()
    res.send({msg: allUsers})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData