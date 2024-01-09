import { Router } from "express";
import { AuthRoutes } from "./modules/auth/route";
import { DoctorRoutes } from "./modules/doctor/route";
import { AppointmentRoutes } from "./modules/appointment/route";

const router = Router();

[
  { path: "/auth", route: AuthRoutes },
  { path: "/doctors", route: DoctorRoutes },
  { path: "/appointments", route: AppointmentRoutes },
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
