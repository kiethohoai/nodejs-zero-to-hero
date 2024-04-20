const connection = require("../config/database");

const getHomePage = (req, res) => {
   return res.render("home.ejs");
};

const getNewsPage = (req, res) => {
   res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
   //Get data at form and use it
   let { email, name, city } = req.body;
   console.log("🚀  file: homeController.js:14  email:", email);
   console.log("🚀  file: homeController.js:14  name:", name);
   console.log("🚀  file: homeController.js:14  city:", city);

   // Using placeholders
   connection.query(
      `INSERT INTO Users (email, name, city)
      VALUES (?, ?, ?)`,
      [email, name, city],
      function (err, results) {
         console.log(results);
         console.log("🚀  file: homeController.js:27  results:", results);
         res.send("User Created");
      }
   );

   // INSERT INTO Users (email, name, city)
   // VALUES ('hohoainam@gmail.com', 'hohoainam', 'TPHue');

   // res.send("Created a new User!");
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
