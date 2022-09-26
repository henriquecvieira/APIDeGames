const Sequelize = require("sequelize")
const connection = require("./database")

const users = connection.define('users', {

  _id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.INTEGER, allowNull: false },
  password: { type: Sequelize.INTEGER, allowNull: false, required: true }
});

users.sync({ force: false });

module.exports = users;
