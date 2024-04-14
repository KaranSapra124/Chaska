const express = require("express");
const {
  createUser,
  getUser,
  uploadImage,
  addProduct,
  getProduct,
} = require("../Controller/ownerController");
const route = express.Router();
const upload = require("../utils/multerCode");
const { uploadArray, uploadToCloudinary } = require("../utils/multerArrayCode");
// console.log(ImgName);
route.use(express.json());

route.post("/create-user", createUser);
route.post("/upload-img", upload.single("userPic"), uploadImage);

route.post("/log-user", getUser);

route.post(
  "/upload-product",
  uploadArray.array("mealImages"),
  async (req, res) => {
    const result = await uploadToCloudinary(req.files);
    res.status(200).send({ message: "Success", img:result });
  }
);
route.post("/add-product", addProduct);
route.get("/get-product", getProduct);
module.exports = route;
