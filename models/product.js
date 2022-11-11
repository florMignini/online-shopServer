const {  DataTypes } = require("sequelize");

const { sequelize } = require("../database/config.js");
const  Category  = require("./category.js");

 const Product = sequelize.define("products",{
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description:{
    type: DataTypes.STRING,
    allowNull: false
  },
  price:{
      type: DataTypes.NUMBER,
      defaultValue: 0,
      allowNull: false
  },
  available:{
    type: DataTypes.BOOLEAN,
    defaultValue: true,
      allowNull: false,
  }

})

//Product-Category relation
Category.hasMany(Product, {
  foreignKey: "categoryId",
    sourceKey: "id"
})
Product.belongsTo(Category, {
   foreignKey: "categoryId",
    targetKey: "id"
})

module.exports = Product