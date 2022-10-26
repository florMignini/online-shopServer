import express from "express";
import cors from "cors";

// import { userRouter } from "../routes/user.js";
import { dbConnection } from "../database/config.js";

//models imports
import "../models/user.js";

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //DB connection
    this.getDbConnection();

    //Middlewares
    this.middlewares();
    //Routes
    this.routes();
  }
  async getDbConnection() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(express.static("public"));
    //CORS
    this.app.use(cors());
    //bodyParser
    this.app.use(express.json());
  }

  routes() {
    //implemet all routes here
    // this.app.use("/users", userRouter);
  }

  listen() {
    //app initialization
    this.app.listen(this.port, () => {
      console.log(`app server is listening on port: ${this.port}`);
    });
  }
}
