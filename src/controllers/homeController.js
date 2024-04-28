const connection = require("../config/database");
const {
  getAllUsers,
  getUsersById,
  updateUserById,
  deleteUserById,
} = require("../service/CRUDService");

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

  res.redirect("/");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

//UPDATE USERS PAGE
const getUpdatePage = async (req, res) => {
  let userId = req.params.id;

  //query database using Promise & get User by Id
  let user = await getUsersById(userId);

  //Render Views
  res.render("update.ejs", { user: user });
};

//UPDATE USER BY ID
const postUpdateUser = async (req, res) => {
  //Get data at form via "name" property & "req.body"
  let { userId, email, name, city } = req.body;

  //Update user via id in DB
  await updateUserById(email, name, city, userId);

  //Go to HomePage
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  let userId = req.params.id;
  let user = await getUsersById(userId);
  res.render("delete.ejs", { user: user });
};

const postHandleRemoveUser = async (req, res) => {
  let userId = req.body.userId;

  //query database & delete user by id
  await deleteUserById(userId);

  res.redirect("/");
};

module.exports = {
  getHomePage,
  getNewsPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
