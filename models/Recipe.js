const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: String,
  description: String,
  image: String,
  preptime: Number,
  cookime: Number,
  servingsize: Number,
  ingredients: [{ type: String, amount: String }],
  instructions: [{ type: String }],
  course: String,
  // Breakfast/Lunch/Dinner
  tags: String,
  recipeCreated: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
