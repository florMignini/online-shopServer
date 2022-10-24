import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI = process.env.DB_URI;
export const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log(`DB succesfully connected`);
  } catch (error) {
    console.log(error);
  }
};
