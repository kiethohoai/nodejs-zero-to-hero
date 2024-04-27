const connection = require("../config/database");

let users = [];
const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getNewsPage = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  //req.body
  let { email, name, city } = req.body;

  //query database using Promise
  const connectionPromise = connection.promise();
  let [results, fields] = await connectionPromise.query(
    `INSERT INTO Users  (email, name, city)
      VALUES (?, ?, ?)`,
    [email, name, city],
  );

  //Message
  res.send("Create User Successfully");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomePage,
  getNewsPage,
  postCreateUser,
  getCreatePage,
};
