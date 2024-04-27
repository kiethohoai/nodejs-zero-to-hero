const mysql = require("mysql2");
require("dotenv").config();

// CONNECTION TO THE DATABASE using Connection Pools
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  queueLimit: 0,
  connectionLimit: 10,
  waitForConnections: true,
});

module.exports = connection;
