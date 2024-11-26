const express = require("express");
const router = express.Router();

const homeController = require("../controllers/post");

router.get("/", homeController.renderHomePage);

module.exports = router;
