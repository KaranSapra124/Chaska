const mongoose = require("mongoose");
const schema = mongoose.Schema;

const adminSchema = schema({
  adminfName: {
    type: String,
    required: true,
  },
  adminlName: {
    type: String,
    required: true,
  },
  adminEmail: {
    type: String,
    required: true,
  },
  adminPassword: {
    type: String,
    required: true,
  },
  adminPhnNum: {
    type: Number,
    isverfied: {
      type: Boolean,
      default: false,
    },
  },
  adminPic: {
    type: String,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
