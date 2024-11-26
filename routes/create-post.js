const express = require("express");
const router = express.Router();

const createPostController = require("../controllers/post");

router.get("/", createPostController.renderCreatePostPage);
router.post("/", createPostController.createPost);

module.exports = router;
