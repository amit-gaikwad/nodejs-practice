const express = require("express");

const app = express();

app.use('/add-product', (req, res, next) => {
  console.log("this is add product route");
  res.send("<h2>This is Add Product page</h2>")
})

app.use('/', (req, res, next) => {
  console.log("In The Middleware 2");
  res.send("<h1>This is from Express</h1>");
});

app.listen(8080);
