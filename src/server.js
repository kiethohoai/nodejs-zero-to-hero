require("dotenv").config();
const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const mysql = require("mysql2");
const connection = require("./config/database");

//Config ENV
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//Config req.body (Conver Form Data to Object and Send to Server)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Config ViewEngine
configViewEngine(app);

//Config Router
app.use("/", webRouter);

//PORT listening
app.listen(port, hostname, () => {
   console.log(`App listening on port ${port}`);
});

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

//TEST CREAT CONNECTION TO THE DATABASE
// const connection = mysql.createConnection({
//    host: process.env.DB_HOST,
//    port: process.env.DB_PORT,
//    user: process.env.DB_USER,
//    password: process.env.DB_PASSWORD,
//    database: process.env.DB_DATABASE,
// });

// // query TO THE DATABASE, GET DATA
// connection.query("SELECT * FROM Users u", function (err, results, fields) {
//    // console.log(results);
//    // console.log(fields);
// });

//Config req.body
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// query TO THE DATABASE, GET DATA
// connection.query("SELECT * FROM Users u", function (err, results, fields) {
//    console.log(results);
// });
