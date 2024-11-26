const express = require("express");
const router = express.Router();

const postDetailController = require("../controllers/post");

router.get("/posts/:postId", postDetailController.postDetail);

module.exports = router;
