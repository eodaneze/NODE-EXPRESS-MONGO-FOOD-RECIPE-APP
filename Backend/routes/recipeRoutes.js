const express = require("express");
const recipeController = require("../controllers/recipeController");
const router = express.Router();

router.get("/", recipeController.homepage);
router.get("/categories", recipeController.exploreCategories);
router.get("/recipe/:id", recipeController.exploreRecipe)

module.exports = router;
