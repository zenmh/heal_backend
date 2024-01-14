"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const client_1 = require("@prisma/client");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const validation_1 = require("./validation");
const router = (0, express_1.Router)();
const { PATIENT, DOCTOR, ADMIN, SUPER_ADMIN } = client_1.Role;
const { bookAnAppointment } = controller_1.AppointmentController;
router.post("/", (0, auth_1.default)(PATIENT, DOCTOR, ADMIN, SUPER_ADMIN), (0, validateRequest_1.default)(validation_1.ZBookAnAppointment), bookAnAppointment);
exports.AppointmentRoutes = router;
