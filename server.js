//imports
const express = require("express");
const server = express();
const path = require("path");
const bodyParser = require("body-parser");

const sequelize = require("./utils/database");

//Import routes
const postRoute = require("./routes/posts");
const adminRoute = require("./routes/admin");

//Middle ware setups
server.use(express.static("public"));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, "public")));

server.use("/posts", (req, res, next) => {
  console.log("i am parent middleware");
  next();
});

server.use((req, res, next) => {
  console.log("i am post middle ware");
  next();
});

server.use("/admin", (req, res, next) => {
  console.log("admin middle ware approved");
  next();
});

//View Engine setup
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

//Error Handling

//Register routes
server.use("/admin", adminRoute);
server.use(postRoute);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    server.listen(5000);
  })
  .catch((err) => console.log(err));
