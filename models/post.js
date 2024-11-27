const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

//Defines the structure of a Post in the database
const Post = sequelize.define("post", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imgUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Post;
