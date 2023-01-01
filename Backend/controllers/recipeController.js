require("../models/database");
const category = require("../models/Category");
const Recipe = require("../models/Recipe");
exports.homepage = async (req, res, next) => {
  try {

     const limitNumber = 5
     const categories = await category.find({}).limit(limitNumber)
     res.render("index", { title: "Cooking blog - Home",categories });
  } catch (error) {
     res.status(500).send({message: error.message || "error occured"});
  }
};

exports.exploreCategories = async (req, res, next) => {
   try {
 
      const limitNumber = 20
      const categories = await category.find({}).limit(limitNumber)
      res.render("categories", { title: "Cooking blog - Categories",categories });
   } catch (error) {
      res.status(500).send({message: error.message || "error occured"});
   }
 };



//  async function insertDymmyCategoryData(){
//    try {
//      await Category.insertMany([
//        {
//          "name": "Thai",
//          "image": "thai-food.jpg"
//        },
//        {
//          "name": "American",
//          "image": "american-food.jpg"
//        }, 
//       {
//          "name": "Chinese",
//          "image": "chinese-food.jpg"
//        },
//        {
//          "name": "Mexican",
//          "image": "mexican-food.jpg"
//        }, 
//        {
//          "name": "Indian",
//          "image": "indian-food.jpg"
//        },
//        {
//          "name": "Spanish",
//          "image": "spanish-food.jpg"
//        }
//      ]);
//    } catch (error) {
//      console.log('err', + error)
//    }
// }
//  insertDymmyCategoryData()






async function insertDymmyRecipeData(){
  try {
    await Recipe.insertMany([
      { 
        "name": "Recipe Name Goes Here",
        "description": `Recipe Description Goes Here`,
        "email": "recipeemail@raddy.co.uk",
        "ingredients": [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        "category": "American", 
        "image": "southern-friend-chicken.jpg"
      },
      { 
        "name": "Recipe Name Goes Here",
        "description": `Recipe Description Goes Here`,
        "email": "recipeemail@raddy.co.uk",
        "ingredients": [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        "category": "American", 
        "image": "southern-friend-chicken.jpg"
      },
    ]);
  } catch (error) {
    console.log('err', + error)
  }
}
insertDymmyRecipeData()