const mongoose = require("mongoose");
const schema = mongoose.Schema;

const mealSchema = schema({
  mealName: {
    type: String,
    required: "Please add product name!",
  },
  mealImages: {
    type: [String],
  },
  mealRating: {
    type: Number,
  },
  mealPrice: {
    type: Number,
    required: "Please enter meal price",
  },
  mealCategory: {
    type: String,
    required: "Please enter the category",
  },
});

module.exports = mongoose.model("meal", mealSchema);
