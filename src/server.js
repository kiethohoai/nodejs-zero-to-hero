require("dotenv").config();
const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const mysql = require("mysql2");
const connection = require("./config/database");

//config req.body - Get Data from "FORM"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Config ViewEngine
configViewEngine(app);

//Config Router
app.use("/", webRouter);

//#0 Config ENV
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

// query TO THE DATABASE, GET DATA
connection.query("SELECT * FROM Users u", function (err, results, fields) {
    // console.log(results);
});

//PORT listening
app.listen(port, hostname, () => {
    console.log(`App listening on port ${port}`);
});
