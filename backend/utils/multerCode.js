const multer = require("multer");
let imgname = "";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueName = new Date().getTime();
    console.log(file,'///////');
    imgname = uniqueName + file.originalname;
    req.imagename = imgname;
    console.log(req.imagename)
    // console.log(file.originalname);
    cb(null, uniqueName + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
