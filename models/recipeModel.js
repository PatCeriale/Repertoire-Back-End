const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  description: {
    type: String,
  },
  ingredients: {
    type: Number,
  },
  instructions: {
    type: Number,
  },
  reviewCreated: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
