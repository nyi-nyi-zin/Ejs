//imports
const express = require("express");
const server = express();
const path = require("path");
const bodyParser = require("body-parser");

const sequelize = require("./utils/database");

const Post = require("./models/post");
const User = require("./models/user");

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
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
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

Post.belongsTo(User, {
  constraints: true,
  onDelete: "CASCADE",
});
User.hasMany(Post);

sequelize
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "Miracle", email: "abcd@gmail.com" });
    }
    return user;
  })
  .then((user) => {
    console.log(user);
    server.listen(5000);
  })
  .catch((err) => console.log(err));
