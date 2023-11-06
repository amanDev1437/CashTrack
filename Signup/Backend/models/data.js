const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const data = sequelize.define("data",{
    id:{
        autoIncrement : true,
        primaryKey : true,
        allowNull : false,
        type : Sequelize.INTEGER
    },
    name:{
        allowNull: false,
        type: Sequelize.STRING
    },
    lname:{
        allowNull: false,
        type: Sequelize.STRING
    },
    email:{
        allowNull: false,
        type: Sequelize.STRING
    },
    password:{
        allowNull: false,
        type: Sequelize.STRING
    }
});

module.exports = data;