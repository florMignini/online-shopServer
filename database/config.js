const { Sequelize } = require ("sequelize");

require('dotenv').config();

 const sequelize = new Sequelize(
  process.env.DB_NAME,
  "postgres",
  process.env.USER_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

 const dbConnection = async () => {
  try {
    await sequelize.sync({alter:false});
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = {
  sequelize,
  dbConnection
}