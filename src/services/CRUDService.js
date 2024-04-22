const connection = require("../config/database");

const getAllUsers = async () => {
   // get a Promise wrapped instance of that pool
   const connectionPromise = connection.promise();
   let [results, fields] = await connectionPromise.query("SELECT * FROM Users");
   return results;
};

const getUserById = async userId => {
   const connectionPromise = connection.promise();
   let [results, fields] = await connectionPromise.query(
      "SELECT * FROM Users WHERE id=?",
      [userId]
   );
   let user = results && results.length > 0 ? results[0] : {};
   return user;
};

module.exports = {
   getAllUsers,
   getUserById,
};
