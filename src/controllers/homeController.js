const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
   //Move to CRUDServce.js
   // get a Promise wrapped instance of that pool
   // const connectionPromise = connection.promise();
   // let [results, fields] = await connectionPromise.query("SELECT * FROM Users");

   let results = await getAllUsers();
   console.log("🚀 ~ results:", results);
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
   const [results, fields] = await connectionPromise.query(
      `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
      [email, name, city]
   );
   console.log("🚀 ~ results:", results);
   res.send("Create A User Successfully!");
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
