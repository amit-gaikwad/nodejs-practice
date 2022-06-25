const path = require("path");
const express = require("express");

const router = express.Router();

const products = [];

//router.get('/admin/add-product', (req, res, next) => {
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// router.post('/admin/add-product', (req, res, next) => {
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  const product = { title: req.body.title };
  products.push(product);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
