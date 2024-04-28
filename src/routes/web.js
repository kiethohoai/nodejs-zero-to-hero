const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getNewsPage,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
  postUpdateUser,
} = require("../controllers/homeController");

//Config Web-Router
router.get("/", getHomePage);
router.get("/news", getNewsPage);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);

module.exports = router;
