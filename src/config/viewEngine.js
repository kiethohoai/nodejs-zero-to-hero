const express = require("express");
const path = require("path");

const configViewEngine = app => {
   //Config template engine + static files Original
   app.set("views", path.join("./src", "views"));
   app.set("view engine", "ejs");

   //Config static files
   app.use(express.static(path.join("./src", "public")));
};
module.exports = configViewEngine;
