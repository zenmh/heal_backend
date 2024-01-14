"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pnv = process.env;
exports.default = {
    env: pnv.NODE_ENV,
    port: pnv.PORT,
    jwt: {
        secret: pnv.JWT_SECRET,
        expires_in: pnv.JWT_EXPIRES_IN,
        refresh_secret: pnv.JWT_REFRESH_SECRET,
        refresh_expires_in: pnv.JWT_REFRESH_EXPIRES_IN,
    },
    bcrypt_slat_round: pnv.BCRYPT_SALT_ROUNDS,
};
