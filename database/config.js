import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI = process.env.DB_URI;
console.log(typeof MONGO_URI);
export const dbConnection = async () => {
  mongoose.connect(MONGO_URI, { useNewUrlParser: true });
  mongoose.connection
    .once("open", function () {
      console.log("Conection has been made!");
    })
    .on("error", function (error) {
      console.log("Error is: ", error);
    });
};
