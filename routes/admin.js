const express = require("express");
const router = express.Router();

const PostController = require("../controllers/post");

//admin create-post
router.get("/create-post", PostController.renderCreatePostPage);

router.post("/", PostController.createPost);

// /admin/posts/id
router.post("/posts/:postId", PostController.deletePost);

router.post("/post-edit", PostController.updatePost);

// /admin/post-edit/id
router.get("/post-edit/:postId", PostController.getOldPost);

module.exports = router;
