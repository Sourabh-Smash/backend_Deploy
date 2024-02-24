require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("game is oN!");
});

app.listen(process?.env?.PORT, () => {
  console.log(`exmaple app listening on port ${process?.env?.PORT} `);
});
