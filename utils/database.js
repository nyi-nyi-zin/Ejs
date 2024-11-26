//First Step
const Sequelize = require("sequelize");

//Creates a Sequelize connection to a MySQL database
const sequelize = new Sequelize("blog", "root", "123", {
  host: "localhost",
  dialect: "mysql",
});

//Exports the configured Sequelize instance
module.exports = sequelize;
