const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getNewsPage,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
} = require("../controllers/homeController");

//Config Web-Router
router.get("/", getHomePage);
router.get("/news", getNewsPage);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);
router.get("/update/:id", getUpdatePage);

module.exports = router;
