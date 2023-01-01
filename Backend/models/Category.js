const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
     name:{
         typea: String,
        
     },
     image:{
         typea: String,
        
     },
});
module.exports = mongoose.model('Category', categorySchema)