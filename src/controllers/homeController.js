const connection = require("../config/database");

let users = [];
const getHomePage = (req, res) => {
    return res.render("home.ejs");
};

const getNewsPage = (req, res) => {
    res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
    console.log("CHECK REQ.BODY", req.body);
    res.send("Create User Successfully");
};

module.exports = {
    getHomePage,
    getNewsPage,
    postCreateUser,
};
