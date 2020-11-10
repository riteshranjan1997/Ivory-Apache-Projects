const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: Array,
  },
  payment: {
    type: Array,
  },
  gift_cards: {
    type: Array,
  },
  past_orders: {
    type: Array,
  },
  upcoming_orders: {
    type: Array,
  },
  saved_restaurants: {
    type: Array,
  },
  cart:{
    type:String,
  },
  credit_cards:{
    type:Array,
  }
});

module.exports = mongoose.model("User", UserSchema);
