import { Router } from "express";

import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

export const userRouter = Router();

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
  deleteUser
);

