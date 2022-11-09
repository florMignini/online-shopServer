const { Router } = require("express");

const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/users.js");
const { validateRole, validateSession } = require("../middlewares");


const userRouter = Router();

userRouter.get("/",  getUsers);

userRouter.post(
  "/",
  createUser,
);

userRouter
  .put
    "/:id",
  updateUser
  ();

userRouter.delete(
  "/:id",
  [validateSession, validateRole],
  deleteUser
);

module.exports = userRouter