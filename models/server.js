const  express = require("express");
const  cors = require("cors");


const {authRouter, categoriesRouter, userRouter, productRouter}  = require ("../routes")
const { dbConnection } = require("../database/config.js");

 class Server {
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
    this.app.use("/users", userRouter);
    this.app.use("/auth", authRouter);
    this.app.use("/categories", categoriesRouter)
    this.app.use("/products", productRouter)
  }

  listen() {
    //app initialization
    this.app.listen(this.port, () => {
      console.log(`app server is listening on port: ${this.port}`);
    });
  }
}
module.exports = Server