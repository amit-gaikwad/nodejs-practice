const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shops');


const app = express();


app.use(bodyParser.urlencoded({ extended: false }))

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(404).send('<h1 style="color:red;">Page Not found</h1>')
})

app.listen(8080);
