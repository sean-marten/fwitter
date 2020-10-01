const mysql = require('mysql2');

// This promise lets us use await
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'fwitter_db',
}).promise();

module.exports = connection;
