const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require("../middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end  
router.get("/users/:userId", middleware.userAuth,userController.getUserData)

router.put("/users/:userId", middleware.userAuth, userController.updateUser)
router.delete("/users/:userId",middleware.userAuth, userController.deleteUSer)

module.exports = router;
 


