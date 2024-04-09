const multer = require("multer");
let imgname = [];
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueName = new Date().getTime();
    console.log(file, "///////");
    imgname.push(uniqueName + file.originalname);
    console.log(imgname)
    req.imagename = imgname;

    // console.log(file.originalname);
    cb(null, uniqueName + file.originalname);
  },
});

const uploadArray = multer({ storage: storage });

module.exports = uploadArray;
