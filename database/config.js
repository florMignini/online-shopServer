import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbConnection = () => {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log(`DB succesfully connected`);
  } catch (error) {
    console.log(error);
  }
};
