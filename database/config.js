import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbConnection = () => {
  try {
    mongoose.connect(
      "mongodb+srv://online-shop-admin:1oRtxWK4fn6SW94q@online-shop.yh1wpzf.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );
    console.log(`DB succesfully connected`);
  } catch (error) {
    console.log(error);
  }
};
