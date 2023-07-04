const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  qty: Number,
  categoryId :{
    type:mongoose.Schema.Types.ObjectId ,
    ref:"Category"
  } 
});
module.exports  = mongoose.model('Product', ProductSchema);