const connection = require("../config/database");

const getAllUsers = async () => {
  //query database using Promise & Get All Users
  const connectionPromise = connection.promise();
  let [results, fields] = await connectionPromise.query(`SELECT * FROM Users`);
  return results;
};

const getUsersById = async (userId) => {
  //query database using Promise & get User by Id
  const connectionPromise = connection.promise();
  let [results, fields] = await connectionPromise.query(
    `SELECT * FROM Users 
    WHERE id=?`,
    [userId],
  );

  //Handle results
  let user = results && results.length > 0 ? results[0] : {};

  //Return user
  return user;
};

const updateUserById = async (email, name, city, userId) => {
  //Update user via id in DB
  const connectionPromise = connection.promise();
  let [results, fields] = await connectionPromise.query(
    `UPDATE Users
  SET email=?, name=?, city=?
  WHERE id=?`,
    [email, name, city, userId],
  );
};

module.exports = {
  getAllUsers,
  getUsersById,
  updateUserById,
};
