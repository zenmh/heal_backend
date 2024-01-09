import { Router } from "express";
import { AppointmentController } from "./controller";
import { Role } from "@prisma/client";
import auth from "../../middlewares/auth";

const router = Router();
const { PATIENT, DOCTOR, ADMIN, SUPER_ADMIN } = Role;
const { bookAnAppointment } = AppointmentController;

router.post("/", auth(PATIENT, DOCTOR, ADMIN, SUPER_ADMIN), bookAnAppointment);

export const AppointmentRoutes = router;
