const express=require('express')
const Router=express.Router()
const customersController=require("../controller/customerController")
const cardController=require("../controller/cardController")

const cardChecker=require("../middleware/cardChecker")
const customerChecker=require("../middleware/customerValidation")

Router.get("/getCustomer",customersController.getCustomer)

Router.delete("/deleteCustomer",customersController.deleteCustomer)

Router.post("/createCustomer",customerChecker.checkCustomer,customersController.createCustomer)


Router.get("getCard",cardController.getCard)
Router.post("/createCard",cardChecker.cardDataValidation,cardController.createCard)

module.exports=Router