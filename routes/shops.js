const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log("In The Middleware 2");
  res.send("<h1>This is from Express</h1>");
});

module.exports = router;
