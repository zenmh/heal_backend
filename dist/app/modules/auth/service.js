"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const prisma_1 = __importDefault(require("../../../constants/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwt_1 = require("../../../helpers/jwt");
const bcrypt_1 = require("../../../helpers/bcrypt");
const signUp = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.user.findFirst({
        where: { name: data.name, email: data.email },
    });
    if (isExist)
        throw new ApiError_1.default(409, "The user is already exist!!");
    data.password = yield (0, bcrypt_1.hashPassword)(data.password);
    const user = yield prisma_1.default.user.create({ data });
    const accessToken = (0, jwt_1.createToken)({ userId: user.id, role: user.role }, "access");
    const refreshToken = (0, jwt_1.createToken)({ userId: user.id, role: user.role }, "refresh");
    return { accessToken, refreshToken, result: user };
});
const singIn = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findFirst({ where: { email } });
    if (!user)
        throw new ApiError_1.default(404, "User not found!!");
    const isPasswordMatch = yield (0, bcrypt_1.matchPassword)(password, user.password);
    if (!isPasswordMatch)
        throw new ApiError_1.default(400, "Password is incorrect!!");
    const accessToken = (0, jwt_1.createToken)({ userId: user.id, role: user.role }, "access");
    const refreshToken = (0, jwt_1.createToken)({ userId: user.id, role: user.role }, "refresh");
    return { accessToken, refreshToken };
});
exports.AuthService = { signUp, singIn };
