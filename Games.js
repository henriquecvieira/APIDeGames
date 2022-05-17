const Sequelize = require("sequelize")
const connection = require("./database")

<<<<<<< HEAD
=======

>>>>>>> 3b76275eb9b0f4a4c58106dfb7881d2f023b88e8
const games = connection.define('games', {
    
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
  title: { type: Sequelize.STRING, allowNull: false },
  year: { type: Sequelize.INTEGER, allowNull: false },
  price: { type: Sequelize.INTEGER, allowNull: false }
});

games.sync({ force: false });

module.exports = games;
