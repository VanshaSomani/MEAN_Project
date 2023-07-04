const express = require("express")
const categoryController = require("../controller/categoryController")
const router = express.Router()

 
router.post("/category",categoryController.addCategory)
router.get("/categories",categoryController.getAllCategory) 
 
module.exports = router 