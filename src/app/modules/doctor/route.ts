import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ZCreateDoctor } from "./validation";
import { DoctorController } from "./controller";
import auth from "../../middlewares/auth";
import { Role } from "@prisma/client";

const router = Router();
const { createDoctor } = DoctorController;
const { ADMIN, SUPER_ADMIN } = Role;

router.post(
  "/",
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(ZCreateDoctor),
  createDoctor
);

export const DoctorRoutes = router;
