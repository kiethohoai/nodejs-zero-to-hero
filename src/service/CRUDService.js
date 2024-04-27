const connection = require("../config/database");

const getAllUsers = async () => {
  //query database using Promise & Get All Users
  const connectionPromise = connection.promise();
  let [results, fields] = await connectionPromise.query(`SELECT * FROM Users`);
  return results;
};

module.exports = {
  getAllUsers,
};
