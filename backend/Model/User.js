const mongoose = require("mongoose");

const schema = mongoose.Schema;

const User = schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  PhnNum: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userPic: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", User);
