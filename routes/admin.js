const express = require("express");
const router = express.Router();

const PostController = require("../controllers/post");

//admin create-post
router.get("/create-post", PostController.renderCreatePostPage);

router.post("/create-post", PostController.createPost);

// /admin/posts/id
router.post("/posts/:postId", PostController.deletePost);

module.exports = router;
