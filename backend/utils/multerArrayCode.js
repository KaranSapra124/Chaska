const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs").promises;
let imgname = [];

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: async function (req, file, cb) {
    // console.log(file);
    const uniqueName = new Date().getTime();
    //  console.log(req.files)
    // imgname.push(uniqueName + file.originalname);

    // console.log(imgname);

    // req.imagename = imgname;
    const filePath =
      "http:/localhost:5000/uploads/" + uniqueName + file.originalname; // Construct file path
    // console.log(filePath);
    imgname.push(filePath);
    // console.log(imgname, "//////\\\\\\");
    req.imgname = imgname;
    // console.log(file.originalname);
    cb(null, uniqueName + file.originalname);
  },
});

const uploadArray = multer({ storage: storage });

const uploadToCloudinary = async (files) => {
  
  // try {
    const uploadedImages = [];
    await Promise.all(
      files.map(async (elem) => {
        console.log(elem.path,'>>>');
        const result = await cloudinary.uploader.upload(elem.path);
        uploadedImages.push(result.secure_url);
      })
    );
    // console.log(uploadedImages)
    return uploadedImages;
  // } catch (error) {
  //   throw new Error("Failed to upload images to Cloudinary");
  // }
};
module.exports = { uploadArray, uploadToCloudinary };
