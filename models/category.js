const sequelize = require("../database/config.js").sequelize;
const {DataTypes} = require("sequelize")


const Category = sequelize.define("categories",{
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})


module.exports = Category