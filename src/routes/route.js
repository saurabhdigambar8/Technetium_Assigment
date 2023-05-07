const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController")
const ProductController = require("../controllers/productController")
const OrderController = require("../controllers/orderController")
//improting middleware
const ComMidlwr = require("../middlewares/CommMiddleware")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct", ProductController.createProduct)
router.post("/createUser", ComMidlwr.headerCheker, UserController.createUser)
router.post("/createOrder", ComMidlwr.headerCheker, ComMidlwr.orderChecker, OrderController.createOrder)

router.get("/getOrder",OrderController.getOrder)

module.exports = router;


