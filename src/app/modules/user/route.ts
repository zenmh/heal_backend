import { Router } from "express";
import { UserController } from "./controller";
import { Role } from "@prisma/client";
import auth from "../../middlewares/auth";

const router = Router();
const { PATIENT, ADMIN, SUPER_ADMIN } = Role;
const { getUser } = UserController;

router.get("/:id", auth(PATIENT, ADMIN, SUPER_ADMIN), getUser);

export const UserRoutes = router;
