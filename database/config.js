import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbConnection = async () => {
  try {
    await mongoose.connect(
      (DB_URI =
        "mongodb+srv://online-shop-user:og5DR7Q1Zej0gx2K@online-shop-server.zplhsya.mongodb.net/?retryWrites=true&w=majority"),
      { useNewUrlParser: true }
    );
    console.log(`DB succesfully connected`);
  } catch (error) {
    console.log(error);
  }
};
