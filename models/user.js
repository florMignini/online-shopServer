const {DataTypes} = require('sequelize')
const { sequelize } = require("../database/config.js");

const Product = require('./product.js')

 const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM,
    values: ["ADMIN_ROLE", "USER_ROLE"],
    allowNull: false,
  },
});


//user - products relation
 User.hasMany(Product, {
    foreignKey: "userId",
    sourceKey: "id"
 })

 Product.belongsTo(User, {
  foreignKey: "userId",
    targetKey: "id"
 })

 module.exports = User