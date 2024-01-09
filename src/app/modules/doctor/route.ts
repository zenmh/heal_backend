import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ZCreateDoctor } from "./validation";
import { DoctorController } from "./controller";
import auth from "../../middlewares/auth";
import { Role } from "@prisma/client";

const router = Router();
const { createDoctor, getDoctor, getDoctors } = DoctorController;
const { ADMIN, SUPER_ADMIN } = Role;

router
  .post(
    "/",
    auth(ADMIN, SUPER_ADMIN),
    validateRequest(ZCreateDoctor),
    createDoctor
  )
  .get("/:id", getDoctor)
  .get("/", getDoctors);

export const DoctorRoutes = router;
