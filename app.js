const express = require("express");
const bodyParser = require("body-parser");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shops");

const app = express();
/**
 * set global values through the app
 * app.set('title',"amit");
 * view engine -> tell express to use dynamic engine
 * pub is already supported wutb express
 */
app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(404).send('<h1 style="color:red;">Page Not found</h1>');
});

app.listen(8080);
