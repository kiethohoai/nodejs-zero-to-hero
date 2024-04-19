const connection = require("../config/database");

let users = [];
const getHomePage = (req, res) => {
   // return res.render("home.ejs");
   // query TO THE DATABASE, GET DATA

   let users = [];
   connection.query("SELECT * FROM Users u", function (err, results, fields) {
      users = results;
      console.log("### Check results: ", results);
      console.log("### Check users = ", users);
      res.send(JSON.stringify(users));
   });
};

const getNewsPage = (req, res) => {
   res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
   console.log(">>>req.body =", req.body);
   res.send("Create a new user!");
};

module.exports = {
   getHomePage,
   getNewsPage,
   postCreateUser,
};
