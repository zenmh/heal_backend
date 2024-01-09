import { Router } from "express";
import { AppointmentController } from "./controller";
import { Role } from "@prisma/client";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { ZBookAnAppointment } from "./validation";

const router = Router();
const { PATIENT, DOCTOR, ADMIN, SUPER_ADMIN } = Role;
const { bookAnAppointment } = AppointmentController;

router.post(
  "/",
  auth(PATIENT, DOCTOR, ADMIN, SUPER_ADMIN),
  validateRequest(ZBookAnAppointment),
  bookAnAppointment
);

export const AppointmentRoutes = router;
