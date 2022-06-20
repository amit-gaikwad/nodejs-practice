const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In The Middleware 1");
  next();
})

app.use((req, res, next) => {
  console.log("In The Middleware 2");
  res.send("<h1>This is from express</h1>");
})

app.listen(8080);
