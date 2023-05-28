const cardModel=require("../models/cardModel")

const getCard=async function(req,res){
    try{
        const card=await cardModel.find({status:"ACTIVE"})
        if(card.length > 0){
        res.status(200).send(card)}
        else{
                    res.status(404).send("No card found")
                }
    }catch(err){
        res.status(500).send(err.mess
            )
    }
}

const createCard = async function(req,res){
    try{
        let data=req.body
    const card =await cardModel.create(data)
    res.status(201).send(card)
    }catch(err){
        res.status(500).send(err.mess
            )
    }
}

module.exports.createCard=createCard
module.exports.getCard=getCard