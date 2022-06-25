const express = require("express");
const adminData = require("./admin");

const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("products>>>", adminData.products);
  /**
   * below thing will not work it access the root directory not the folder location
   */
  // res.sendFile('/views/shop.html');

  /**
   * __dirname global varibale which holds absolute path of this project folder
   */
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
