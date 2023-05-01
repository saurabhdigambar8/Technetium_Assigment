const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const AuthorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController");
const AuthorModel = require('../models/authorModel');
const BookModel = require('../models/bookModel');
const authorModel = require('../models/authorModel');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor",AuthorController.createAuthor)

router.get("/getAuthorsData",AuthorController.getAuthorsData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.get("/booksByChetanBhagat",BookController.booksByChetanBhagat)

router.get("/findAndUpdate",BookController.findAndUpdate)

router.get("/bookBet50to100",BookController.bookBet50to100)

module.exports = router;