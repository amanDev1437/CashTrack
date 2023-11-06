const Sequelize = require("sequelize");

const sequelize = new Sequelize("cashtrack", "root", "tiger",{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;