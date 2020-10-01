const { findAllUsers, insertUser } = require('./userQueries');
const connection = require('../config/connection');

const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return Promise.resolve(rows);
  } catch (e) {
    return Promise.reject(e);
  }
};

const addUser = async (userInput) => {
  try {
    const result = await connection.query(insertUser, userInput);
    return Promise.resolve(result);
  } catch (e) {
    return Promise.reject(e);
  }
};

module.exports = {
  fetchUsers,
  addUser,
};
