const express = require("express");
const router = express.Router();
const {
   getHomePage,
   getNewsPage,
   postCreateUser,
   getCreatePage,
} = require("../controllers/homeController");

//Config Web-Router
router.get("/", getHomePage);
router.get("/news", getNewsPage);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

module.exports = router;

/////////////////// BACK UP /////////////////
// router.get("/", (req, res) => {
//    res.send("Hello World! My first project of NodeJS");
// });

// router.get("/news", (req, res) => {
//    res.render("sample.ejs");
// });

// const { getHomePage, getNewsPage } = require("../controllers/homeController");
// router.get("/", getHomePage);
// router.get("/news", getNewsPage);
