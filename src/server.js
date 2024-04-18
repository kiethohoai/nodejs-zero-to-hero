require("dotenv").config();
const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const connection = require("./config/database");

//#0 Config env
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
//#1 Config ViewEngine
configViewEngine(app);

//#2 Config Router
app.use("/", webRouter);

//3 Connect to DB and Dosomething with DB
connection.query("SELECT * FROM Users u", function (err, results, fields) {
   console.log(results);
});

//PORT listening
app.listen(port, hostname, () => {
   console.log(`App listening on port ${port}`);
});

//Update MVC

////////////////////// BACK UP //////////////////////////
//Config template engine + static files Original
//app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "ejs");

//Config static files
// app.use(express.static(path.join(__dirname, "public")));

//Config routes original
// app.get("/", (req, res) => {
//    res.send("Hello World! My first project of NodeJS");
// });

// app.get("/home", (req, res) => {
//    res.render("sample.ejs");
// });

// Create the connection to database
// const mysql = require("mysql2");
// const connection = mysql.createConnection({
//    host: "localhost",
//    port: 3307, //default 3306
//    user: "root", //default password empty
//    password: "123456",
//    database: "hohoaikiet",
// });
