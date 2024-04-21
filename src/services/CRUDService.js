const connection = require("../config/database");

const getAllUsers = async () => {
   // get a Promise wrapped instance of that pool
   const connectionPromise = connection.promise();
   let [results, fields] = await connectionPromise.query("SELECT * FROM Users");
   return results;
};

module.exports = {
   getAllUsers,
};
