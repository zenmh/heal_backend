import { Router } from "express";
import { AuthRoutes } from "./modules/auth/route";
import { DoctorRoutes } from "./modules/doctor/route";
import { AppointmentRoutes } from "./modules/appointment/route";
import { UserRoutes } from "./modules/user/route";

const router = Router();

[
  { path: "/auth", route: AuthRoutes },
  { path: "/doctors", route: DoctorRoutes },
  { path: "/appointments", route: AppointmentRoutes },
  { path: "/users", route: UserRoutes },
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
