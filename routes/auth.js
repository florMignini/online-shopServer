import { Router } from "express";

import { loginUser } from "../controllers/auth.js";

export const authRouter = Router();

authRouter.post('/login', loginUser)