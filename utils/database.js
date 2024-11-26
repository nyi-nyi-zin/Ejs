const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "blog",
  password: "123",
});

module.exports = pool.promise();
