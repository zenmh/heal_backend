import { Router } from "express";
import { AuthController } from "./controller";
import { ZSingIn, ZSingUp } from "./validation";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();

const { signUp, signIn } = AuthController;

router
  .post("/signup", validateRequest(ZSingUp), signUp)
  .post("/signin", validateRequest(ZSingIn), signIn);

export const AuthRoutes = router;
