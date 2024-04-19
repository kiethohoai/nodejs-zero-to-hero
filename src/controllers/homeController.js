const connection = require("../config/database");

const getHomePage = (req, res) => {
   return res.render("home.ejs");
};

const getNewsPage = (req, res) => {
   res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
   console.log(
      "🚀 ~ file: homeController.js:12 ~ postCreateUser ~ req.body:",
      req.body
   );
   res.send("Created a new User!");
};

module.exports = {
   getHomePage,
   getNewsPage,
   postCreateUser,
};

/////////////// BACK UP /////////////////
//Create user handle
// const postCreateUser = (req, res) => {
//    console.log(">>>req.body =", req.body);
//    res.send("Create a new user!");
// };
