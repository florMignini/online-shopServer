import { Router } from "express";

import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/users.js";
import { validateRole } from "../middlewares/validateRole.js";
import { validateSession } from "../middlewares/validateSession.js";

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
  [validateSession, validateRole],
  deleteUser
);

