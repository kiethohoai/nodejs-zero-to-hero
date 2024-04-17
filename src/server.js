require("dotenv").config();
const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");

// config env
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
//#1 Config ViewEngine
configViewEngine(app);

//#2 Config Router
app.use("/", webRouter);

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
