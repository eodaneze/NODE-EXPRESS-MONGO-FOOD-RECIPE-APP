const express = require("express");
const recipeController = require('../controllers/recipeController')
const router = express.Router();

router.get("/", recipeController.homepage)



module.exports = router