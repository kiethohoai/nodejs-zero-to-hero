const connection = require("../config/database");

let users = [];
const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getNewsPage = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  //req.body
  let { email, name, city } = req.body;

  //query DB
  connection.query(
    `INSERT INTO Users  (email, name, city)
    VALUES (?, ?, ?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);
    },
  );

  //Message
  res.send("Create User Successfully");
};

module.exports = {
  getHomePage,
  getNewsPage,
  postCreateUser,
};
