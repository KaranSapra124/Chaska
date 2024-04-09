const User = require("../Model/User");
const meal = require("../Model/product");
const { hashPass, authHash } = require("../utils/hashPass");
exports.createUser = async (req, res, next) => {
  try {
    const { fname, lname, PhnNum, email, password, userPic } = req.body;
    // console.log(req.file);
    const pass = await hashPass(password);
    await User.create({
      fName: fname,
      lName: lname,
      PhnNum: PhnNum,
      email: email,
      password: pass,
      userPic: userPic,
    });
    res.status(200).send({ message: "Successfull" });
  } catch (err) {
    console.log(err);
  }
};

exports.getUser = async (req, res, next) => {
  if (req.body.password !== undefined) {
    const user = await User.findOne({ email: req.body.email });
    const result = await authHash(req.body.password, user?.password);
    result
      ? res.status(200).send(user)
      : res.status(403).send("Incorrect Password");
  } else {
    const { email } = req.body;
    // console.log(`"${userEmail}"`);
    const foundUser = await User.findOne({ email: email });
    console.log(foundUser, ">................");
    res.status(200).send(foundUser);
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
exports.getProducts = async (req, res, next) => {
  const meals = await meal.find();
  if (!meals) {
    res.status(400).send("No meals found!");
  }
  res.status(200).send(meals);
};
