require("../models/database")
const Category = require("../models/Category")
const category = require('../models/Category')

exports.homepage = async(req, res, next) => {
   res.render("index", {title: "Cooking blog - Home"})
}






async function insertDymmyCategoryData(){
   try{
       await Category.insertMany([
         {
            "name": "Thai",
            "image": "Thai-food.jpg"
         },
         {
            "name": "American",
            "image": "american-food.jpg"
         },
         {
            "name": "Indian",
            "image": "indian-food.jpg"
         },
      ]);
   }catch(error){
       console.log(error)
   }
}

insertDymmyCategoryData()