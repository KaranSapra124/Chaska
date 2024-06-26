const {v2} = require("cloudinary")
const express = require("express");
const connectDb = require("./utils/DbConfig");
const userRoute = require("./Route/userRoute");
const ownerRoute = require("./Route/ownerRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
connectDb();
// import {v2 as cloudinary} from 'cloudinary';
          
v2.config({ 
  cloud_name: process.env.Cloudinary_cloud, 
  api_key: process.env.Cloudinary_Api, 
  api_secret: process.env.Cloudinary_Secret 
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use(
  cors({
    origin: process.env.Frontend_Url,
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/user", userRoute);
app.use("/admin", ownerRoute);

app.listen(3000, () => {
  console.log("Backend Running!");
});
