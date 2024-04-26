const connection = require("../config/database");
const {
   getAllUsers,
   getUserById,
   updateUserById,
} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
   //Move to CRUDServce.js
   // get a Promise wrapped instance of that pool
   // const connectionPromise = connection.promise();
   // let [results, fields] = await connectionPromise.query("SELECT * FROM Users");

   let results = await getAllUsers();
   return res.render("home.ejs", { listUsers: results });
};

const getNewsPage = (req, res) => {
   res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
   //Get DATA at FORM
   let { email, name, city } = req.body;

   // get a Promise wrapped instance of that pool
   const connectionPromise = connection.promise();
   // query database using promise
   let [results, fields] = await connectionPromise.query(
      `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
      [email, name, city]
   );
   res.send("Create A User Successfully!");
};

const getCreatePage = (req, res) => {
   res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
   const userId = req.params.id;
   let user = await getUserById(userId);
   res.render("edit.ejs", { user: user });
};

const postUpdateUser = async (req, res) => {
   let { userId, email, name, city } = req.body;
   updateUserById(email, name, city, userId);
   res.redirect("/");
};

module.exports = {
   getHomePage,
   getNewsPage,
   postCreateUser,
   getCreatePage,
   getUpdatePage,
   postUpdateUser,
};
