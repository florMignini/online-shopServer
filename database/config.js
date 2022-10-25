import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
    console.log(`DB succesfully connected`);
  } catch (error) {
    console.log(error);
  }
};
