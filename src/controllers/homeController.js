const connection = require("../config/database");
const { getAllUsers, getUserById } = require("../services/CRUDService");

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
   // let email = req.body.email;
   // let name = req.body.name;
   // let city = req.body.city;

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

module.exports = {
   getHomePage,
   getNewsPage,
   postCreateUser,
   getCreatePage,
   getUpdatePage,
};

/////////////// BACK UP /////////////////
//Create user handle
// const postCreateUser = (req, res) => {
//    console.log(">>>req.body =", req.body);
//    res.send("Create a new user!");
// };

// Using placeholders save to database
// connection.query(
//    `INSERT INTO Users (email, name, city)
//    VALUES (?, ?, ?)`,
//    [email, name, city],
//    function (err, results) {
//       console.log(results);
//       console.log("🚀  file: homeController.js:27  results:", results);
//       res.send("User Created");
//    }
// );

//query to the DB
// get a Promise wrapped instance of that pool
// const promisePool = connection.promise();
// const [results, fields] = await promisePool.query("SELECT * FROM Users u");
// console.log("🚀 ----------------------🚀");
// console.log("🚀 + results:", results);
// console.log("🚀 ----------------------🚀");

// query TO THE DATABASE, GET DATA
// connection.query("SELECT * FROM Users u", function (err, results, fields) {
//    // console.log(results);
// });

// const getUpdatePage = async (req, res) => {
//    const userId = req.params.id;
//    const connectionPromise = connection.promise();
//    let [results, fields] = await connectionPromise.query(
//       "SELECT * FROM Users WHERE id=?",
//       [userId]
//    );
//    let user = results && results.length > 0 ? results[0] : {};
//    res.render("edit.ejs", { user: user });
// };
