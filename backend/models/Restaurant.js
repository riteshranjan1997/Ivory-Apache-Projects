const { required } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  restaurant_id: {
    type: String,
    required: true,
  },
  restaurant_name: {
    type: String,
    required: true,
  },
  restaurant_images: {
    type: String,
  },
  menu_items: {
    type: Array,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  locality: {
    type: String,
  },
  cuisines: {
    type: Array,
  },
  aggregate_rating: {
    type: String,
  },
  rating_color: {
    type: String,
  },
  rating_text: {
    type: String,
  },
  votes: {
    type: Number,
  },
  location: {
    type: Schema.Types.Mixed,
  },
  food_was_good: {
    type: String,
  },
  delivery_was_on_time: {
    type: String,
  },
  order_was_correct: {
    type: String,
  },
  timings: {
    type: Array,
  },
  delivery_time: {
    type: String,
  },
  reviews: {
    type: Array,
  },
  tot_reviews: {
    type: Number,
  },
  order_tracking_enabled: {
    type: Boolean,
  },
  seamless_plus: {
    type: Boolean,
  },
  free_delivery: {
    type: Boolean,
  },
  group_order: {
    type: Boolean,
  },
});

module.exports = mongoose.model("restaurants-data", RestaurantSchema);
