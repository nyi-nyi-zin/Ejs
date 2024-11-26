// const posts = [];

const Post = require("../models/post");

exports.renderCreatePostPage = (req, res) => {
  res.render("create-post", {
    title: "Post-create Page",
  });
};

exports.createPost = (req, res) => {
  const { title, description, photo } = req.body;
  const post = new Post(title, description, photo);
  post
    .setPost()
    .then(() => res.redirect("/posts"))
    .catch((err) => console.log(err));
  // posts.push({
  //   id: Math.random(),
  //   title,
  //   description,
  //   photo,
  // });
};

exports.renderHomePage = (req, res) => {
  res.render("home", {
    title: "Home Page",
  });
};

exports.getPosts = (req, res) => {
  Post.getAllPost()
    .then(([rows]) => {
      console.log(rows);
      res.render("posts", { title: "Post Page", postsArr: rows });
    })
    .catch((err) => console.log(err));
};

exports.postDetail = (req, res) => {
  const postId = Number(req.params.postId);
  // const post = posts.find((post) => post.id === postId);

  Post.getSinglePost(postId)
    .then(([row]) => {
      res.render("detail", { title: "Detail Page", post: row[0] });
    })
    .catch((err) => console.log(err));
};
