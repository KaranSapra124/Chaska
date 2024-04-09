const mongoose = require("mongoose");
require("dotenv").config()
const connectDb = () => {
  mongoose
    .connect(
      `mongodb+srv://Karan:${process.env.Db_Password}@cluster0.ypx1erc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => console.log("Successfully Connected!"))
    .catch((err) => console.log(err));
};

module.exports = connectDb;
