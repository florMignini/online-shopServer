import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log(typeof process.env.DB_URL);
export const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`DB succesfully connected`);
  } catch (error) {
    console.log(error);
  }
};
