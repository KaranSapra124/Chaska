const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Admin = require("./Admin");

const mealSchema = schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
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
  mealDescription: {
    type: String,
    required: "Please Fill Description!",
  },
});

module.exports = mongoose.model("meal", mealSchema);
