const Admin = require("../Model/Admin");
const meal = require("../Model/product");

const { hashPass, authHash } = require("../utils/hashPass");
exports.createUser = async (req, res, next) => {
  try {
    const { fname, lname, PhnNum, email, password, userPic } = req.body;
    // console.log(req.file);
    // console.log(fname, "//////////////////////////");
    const pass = await hashPass(password);
    // console.log(pass);
    await Admin.create({
      adminfName: fname,
      adminlName: lname,
      adminPhnNum: PhnNum,
      adminEmail: email,
      adminPassword: pass,
      adminPic: userPic,
    });
    res.status(200).send({ message: "Successfull" });
  } catch (err) {
    console.log(err);
  }
};

exports.getUser = async (req, res, next) => {
  console.log(req.body);
  const owner = await Admin.findOne({ adminEmail: req.body.email });
  console.log(owner);
  const result = await authHash(req.body.password, owner?.adminPassword);
  result
    ? res.status(200).send(owner)
    : res.status(403).send("Incorrect Password");
};
exports.uploadImage = async (req, res, next) => {
  try {
    if (req.imagename) {
      res.status(200).send(req.imagename);
    }
  } catch (err) {
    res.status(401).send({ message: "Upload Failed!" });
  }
};
exports.addProduct = async (req, res, next) => {
  const { mealName, mealImages, mealRating, mealPrice, mealCategory } =
    req.body;
  // console.log(req.body, req.Img);
  const NewMeal = await meal.create({
    mealName: mealName,
    mealImages: mealImages,
    mealRating: mealRating,
    mealPrice: mealPrice,
    mealCategory: mealCategory,
  });

  console.log(NewMeal);

  res.status(200).send({ message: "Success", NewMeal });
};
exports.getProduct = async (req, res, next) => {
  const products = await meal.find();
  if (!products) {
    throw new Error("No Meals Found!");
  }
  res.status(200).send({ message: "Success", products:products });
};
