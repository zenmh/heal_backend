import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ZCreateDoctor } from "./validation";
import { DoctorController } from "./controller";

const router = Router();
const { createDoctor } = DoctorController;

router.post("/", validateRequest(ZCreateDoctor), createDoctor);

export const DoctorRoutes = router;
