import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  "postgres",
  process.env.USER_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

export const dbConnection = async () => {
  try {
    await sequelize.sync({force: true});
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
