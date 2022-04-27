const Sequelize = require("sequelize")
const connection = require("./database")

/*const Games = connection.define("games", {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },    
    title:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },    
    year:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },    
    price:{
        type: Sequelize.DECIMAL(5,2),
        allowNull: false,
        primaryKey: true
    },    
})



module.exports = Games
*/



const Game = connection.define('games', {
    
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
  title: { type: Sequelize.STRING, allowNull: false },
  year: { type: Sequelize.INTEGER, allowNull: false },
  price: { type: Sequelize.INTEGER, allowNull: false }
});

Game.sync({ force: false });

module.exports = Game;