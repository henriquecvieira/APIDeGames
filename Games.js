const Sequelize = require("sequelize")
const connection = require("./database")

// const Games = connection.define("game", {
//     id:{
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         primaryKey: true
//     },    
//     title:{
//         type: Sequelize.STRING,
//         allowNull: false,
//         primaryKey: true
//     },    
//     year:{
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         primaryKey: true
//     },    
//     price:{
//         type: Sequelize.DECIMAL(5,2),
//         allowNull: false,
//         primaryKey: true
//     },    
// })



// module.exports = Games




const games = connection.define('games', {
    
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
  title: { type: Sequelize.STRING, allowNull: false },
  year: { type: Sequelize.INTEGER, allowNull: false },
  price: { type: Sequelize.INTEGER, allowNull: false }
});

games.sync({ force: false });

module.exports = games;
