const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getNewsPage,
  getCreatePage,
  postCreateUser,
} = require("../controllers/homeController");

//Config Web-Router
router.get("/", getHomePage);
router.get("/news", getNewsPage);
router.get("/create", getCreatePage);

router.post("/create-user", postCreateUser);

module.exports = router;
