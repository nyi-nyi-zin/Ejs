// const posts = [];

const Post = require("../models/post");

exports.renderCreatePostPage = (req, res) => {
  res.render("create-post", {
    title: "Post-create Page",
  });
};

exports.createPost = (req, res) => {
  const { title, description, photo } = req.body;
  //Uses Post.create() to save a new post to the database
  Post.create({
    title,
    description,
    imgUrl: photo,
  })
    .then((result) => {
      console.log(result);
      console.log("New Post created");
      res.redirect("/posts");
    })
    .catch((err) => console.log(err));
};

exports.renderHomePage = (req, res) => {
  res.render("home", {
    title: "Home Page",
  });
};

exports.getPosts = (req, res) => {
  Post.findAll()
    .then((posts) => {
      res.render("posts", { title: "Post Page", postsArr: posts });
    })
    .catch((err) => console.log(err));
};

exports.postDetail = (req, res) => {
  const postId = req.params.postId;
  Post.findByPk(postId)
    .then((post) => res.render("detail", { title: "Detail Page", post }))
    .catch((err) => console.log(err));
};
