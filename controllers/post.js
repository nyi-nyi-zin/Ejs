const posts = [];

exports.renderCreatePostPage = (req, res) => {
  res.render("create-post", {
    title: "Post-create Page",
  });
};

exports.createPost = (req, res) => {
  const { title, description, photo } = req.body;
  posts.push({
    id: Math.random(),
    title,
    description,
    photo,
  });
  res.redirect("/posts");
};

exports.renderHomePage = (req, res) => {
  res.render("home", {
    title: "Home Page",
  });
};

exports.renderPostPage = (req, res) => {
  res.render("posts", { title: "Post Page", postsArr: posts });
};

exports.postDetail = (req, res) => {
  const postId = Number(req.params.postId);
  const post = posts.find((post) => post.id === postId);
  res.render("detail", { title: "Detail Page", post });
};
