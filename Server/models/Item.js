const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  productId:Number,
  name: String,
  price: Number,
  quantity: Number,
});

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;
