const path = require("path");
const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../client");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors());
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
  socket.broadcast.emit("hi");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.use(express.static("client"));
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log("Server is up on " + port);
});

console.log(__dirname + "/../client");
console.log(publicPath);
