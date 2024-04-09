const express = require("express");
const {
  createUser,
  getUser,
  uploadImage,
  getProducts,
} = require("../Controller/userController");
const route = express.Router();
const upload = require("../utils/multerCode");
// console.log(ImgName);
route.use(express.json());

route.post("/create-user", createUser);
route.post("/upload-img", upload.single("userPic"), uploadImage);

route.post("/log-user", getUser);
route.get("/get-products", getProducts);
module.exports = route;
