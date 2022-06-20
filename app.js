const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded())

app.use('/add-product', (req, res, next) => {
  console.log("this is add product route");
  res.send('<form action="/product" method="POST" > <input name="title"/><button type="submit">Submit</button></form>')
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect("/")
});

app.use('/', (req, res, next) => {
  console.log("In The Middleware 2");
  res.send("<h1>This is from Express</h1>");
});

app.listen(8080);
