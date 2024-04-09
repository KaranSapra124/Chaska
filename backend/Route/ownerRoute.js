const express = require("express");
const {
  createUser,
  getUser,
  uploadImage,
  addProduct,
} = require("../Controller/ownerController");
const route = express.Router();
const upload = require("../utils/multerCode");
const uploadArray = require("../utils/multerArrayCode");
// console.log(ImgName);
route.use(express.json());

route.post("/create-user", createUser);
route.post("/upload-img", upload.single("userPic"), uploadImage);

route.post("/log-user", getUser);

route.post("/upload-product", uploadArray.array("mealImages"),uploadImage);
route.post("/add-product", addProduct);
module.exports = route;
