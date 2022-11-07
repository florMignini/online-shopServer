import {  DataTypes } from "sequelize";

import { Product } from "./product.js";
import { sequelize } from "../database/config.js";


export const Category = sequelize.define("categories",{
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image:{
    type: DataTypes.STRING,
    allowNull: false
  }
})

