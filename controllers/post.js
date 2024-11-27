//Post class instance
const Post = require("../models/post");

//render post create page
exports.renderCreatePostPage = (req, res) => {
  res.render("create-post", {
    title: "Post-create Page",
  });
};

//Handle create post
exports.createPost = (req, res) => {
  const { title, description, photo } = req.body;
  //Uses Post.create() to save a new post to the database
  req.user
    .createPost({
      title,
      description,
      imgUrl: photo,
    })
    .then((result) => {
      console.log(result);
      console.log("New Post created");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

//Get All post from databases
exports.getPosts = (req, res) => {
  Post.findAll({ order: [["createdAt", "desc"]] })
    .then((posts) => {
      res.render("posts", { title: "Post Page", postsArr: posts });
    })
    .catch((err) => console.log(err));
};

//get post detail by id
exports.postDetail = (req, res) => {
  const postId = req.params.postId;
  Post.findByPk(postId)
    .then((post) => res.render("detail", { title: "Detail Page", post }))
    .catch((err) => console.log(err));
};

//delete single post
exports.deletePost = (req, res) => {
  const postId = req.params.postId;
  Post.findByPk(postId)
    .then((post) => {
      if (!post) {
        res.redirect("/");
      }
      return post.destroy();
    })
    .then((result) => {
      console.log("Post Deleted!");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

//Get Old Post data
exports.getOldPost = (req, res) => {
  const postId = req.params.postId;
  Post.findByPk(postId)
    .then((post) => res.render("editPost", { title: `${post.title}`, post }))
    .catch((err) => console.log(err));
};

//Post Edit
exports.updatePost = (req, res) => {
  const { title, description, photo, postId } = req.body;
  Post.findByPk(postId)
    .then((post) => {
      // if (!post) {
      //   return res.redirect("/");
      // }
      post.title = title;
      post.description = description;
      post.imgUrl = photo;
      return post.save();
    })
    .then((result) => {
      console.log(`Post id => ${postId} is updated successfully`);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
