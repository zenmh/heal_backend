"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const client_1 = require("@prisma/client");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = (0, express_1.Router)();
const { PATIENT, ADMIN, SUPER_ADMIN } = client_1.Role;
const { getUser } = controller_1.UserController;
router.get("/:id", (0, auth_1.default)(PATIENT, ADMIN, SUPER_ADMIN), getUser);
exports.UserRoutes = router;
