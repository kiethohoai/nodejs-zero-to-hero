const express = require("express");
const router = express.Router();
const { getHomePage, getNewsPage, postCreateUser } = require("../controllers/homeController");

//Config Web-Router
router.get("/", getHomePage);
router.get("/news", getNewsPage);
router.post("/create-user", postCreateUser);

module.exports = router;
