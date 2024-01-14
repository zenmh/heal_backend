"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const route_1 = require("./modules/auth/route");
const route_2 = require("./modules/doctor/route");
const route_3 = require("./modules/appointment/route");
const route_4 = require("./modules/user/route");
const router = (0, express_1.Router)();
[
    { path: "/auth", route: route_1.AuthRoutes },
    { path: "/doctors", route: route_2.DoctorRoutes },
    { path: "/appointments", route: route_3.AppointmentRoutes },
    { path: "/users", route: route_4.UserRoutes },
].forEach(({ path, route }) => router.use(path, route));
exports.routes = router;
