import { Router } from "express";
import { check } from "express-validator";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/users.js";
import { validatorMiddleware } from "../middlewares/validator.js";
import {
  emailValidator,
  roleValidator,
  idValidator,
} from "../helpers/validator.helper.js";

export const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.post(
  "/",
  [
    check("name", "please provide a name").notEmpty(),
    check("email").custom(emailValidator),
    check(
      "password",
      "please provide a password greater than six characters"
    ).isLength({ min: 6 }),
    check("rol").custom(roleValidator),
    validatorMiddleware,
  ],
  createUser
);

userRouter.put(
  "/:id",
  [
    check("id", "please enter a valid ID").isMongoId(),
    check("id").custom(idValidator),
    check("rol").custom(roleValidator),
    validatorMiddleware,
  ],
  updateUser
);

userRouter.delete(
  "/:id",
  [
    check("id", "please enter a valid ID").isMongoId(),
    check("id").custom(idValidator),
    validatorMiddleware,
  ],
  deleteUser
);
