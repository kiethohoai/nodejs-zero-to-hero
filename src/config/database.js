require("dotenv").config();
const mysql = require("mysql2");

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
   // maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
   // idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
   // enableKeepAlive: true,
   // keepAliveInitialDelay: 0,
});

module.exports = connection;

// CONNECTION TO THE DATABASE with createConnection
// const connection = mysql.createConnection({
//    host: process.env.DB_HOST,
//    port: process.env.DB_PORT,
//    user: process.env.DB_USER,
//    password: process.env.DB_PASSWORD,
//    database: process.env.DB_DATABASE,
// });
