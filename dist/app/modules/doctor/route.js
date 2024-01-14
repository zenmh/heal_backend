"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const validation_1 = require("./validation");
const controller_1 = require("./controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const { createDoctor, getDoctor, getDoctors } = controller_1.DoctorController;
const { ADMIN, SUPER_ADMIN } = client_1.Role;
router
    .post("/", (0, auth_1.default)(ADMIN, SUPER_ADMIN), (0, validateRequest_1.default)(validation_1.ZCreateDoctor), createDoctor)
    .get("/:id", getDoctor)
    .get("/", getDoctors);
exports.DoctorRoutes = router;
