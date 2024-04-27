const connection = require("../config/database");
const { getAllUsers } = require("../service/CRUDService");

//NEW PAGE
const getNewsPage = (req, res) => {
  res.render("sample.ejs");
};

//HOME PAGE
const getHomePage = async (req, res) => {
  //Get all users
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

//CREATE USER
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
