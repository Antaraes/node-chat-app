const path = require("path");
const express = require("express");
const cors = require("cors");
const publicPath = path.join(__dirname, "../client");
const app = express();
app.use(cors());
app.use(express.static("client"));
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server is up on port 3000");
});

console.log(__dirname + "/../client");
console.log(publicPath);
