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
   //Get DATA at FORM
   let { userId, email, name, city } = req.body;
   console.log("🚀 ~ userId:", userId);
   console.log("🚀 ~ email:", email);
   console.log("🚀 ~ name:", name);
   console.log("🚀 ~ city:", city);

   updateUserById(email, name, city, userId);

   // res.send("Update A User Successfully!");
   //go back homepage
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
//       res.send("User Created");
//    }
// );

//query to the DB
// get a Promise wrapped instance of that pool
// const promisePool = connection.promise();
// const [results, fields] = await promisePool.query("SELECT * FROM Users u");
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

// query to DB and do something!
// const connectionPromise = connection.promise();
// let [results, fields] = await connectionPromise.query(
//    `UPDATE Users
//    SET email=?, name=?, city=?
//    WHERE ID=?`,
//    [email, name, city, userId]
// );
