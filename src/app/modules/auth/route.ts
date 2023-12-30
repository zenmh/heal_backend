import { Router } from "express";
import { AuthController } from "./controller";
import validateRequest from "../../middlewares/validateRequest";
import { ZSingUp } from "./validation";

const router = Router();

const { signUp } = AuthController;

router.post("/singup", validateRequest(ZSingUp), signUp);

export const AuthRoutes = router;
