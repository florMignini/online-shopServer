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
    type: DataTypes.INTEGER,
    allowNull: false
}

})

//Product-Category relation
Product.hasOne(Category, {
  foreignKey: "ProductId",
    sourceKey: "id"
})
Category.belongsTo(Product, {
   foreignKey: "ProductId",
    targetKey: "id"
})

module.exports = Product