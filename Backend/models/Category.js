const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
     name:{
         typea: String,
         required: 'this field is required'
     },
     image:{
         typea: String,
         required: 'this field is required'
     },
});
module.exports = mongoose.model('Category', categorySchema)