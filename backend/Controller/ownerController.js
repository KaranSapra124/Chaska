const Admin = require("../Model/Admin");
const meal = require("../Model/product");
const jwt = require("jsonwebtoken");

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
  // console.log(req.body);
  if (req.cookies.adminId !== undefined && req.cookies.adminId !== null) {
    const admin_id = req.cookies.adminId;
    const decoded = jwt.verify(admin_id, process.env.Secret_Key);
    const owner = await Admin.findById(decoded.adminId);
    console.log(owner, "...........");
    return res.status(200).send(owner);
  } else {
    const owner = await Admin.findOne({ adminEmail: req.body.email });
    console.log(owner, ">>>");
    const result = await authHash(req.body.password, owner?.adminPassword);
    if (!result) res.status(403).send("Incorrect Password");
    const token = jwt.sign({ adminId: owner._id }, process.env.Secret_Key);
    const date = new Date()
    res.cookie("adminId", token , {httpOnly:true});
    res.status(200).send(owner);
  }
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
  const {
    mealName,
    mealImages,
    mealRating,
    mealPrice,
    mealCategory,
    mealDescription,
  } = req.body;
  const admin_id = req.cookies.adminId;
  const decoded = jwt.verify(admin_id, process.env.Secret_Key);
  console.log(decoded);
  // console.log(req.body, req.Img);
  const NewMeal = await meal.create({
    adminId: decoded.adminId,
    mealName: mealName,
    mealImages: mealImages,
    mealRating: mealRating,
    mealPrice: mealPrice,
    mealCategory: mealCategory,
    mealDescription: mealDescription,
  });

  const populatedMeal = await meal
    .findById(NewMeal._id)
    .populate("adminId")
    .exec();

  res.status(200).send({ message: "Success", populatedMeal });
};
exports.getProduct = async (req, res, next) => {
  // console.log(req.owner.id);

  const products = await meal.find();
  if (!products) {
    throw new Error("No Meals Found!");
  }
  res.status(200).send({ message: "Success", products: products });
};
