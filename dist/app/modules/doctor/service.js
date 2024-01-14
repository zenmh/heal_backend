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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorService = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../../constants/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const bcrypt_1 = require("../../../helpers/bcrypt");
const pagination_1 = require("../../../helpers/pagination");
const constant_1 = require("./constant");
const createDoctor = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let doctor;
    const isExist = yield prisma_1.default.user.findFirst({
        where: { name: data.name, email: data.email },
    });
    if (isExist)
        throw new ApiError_1.default(409, "The user is already registered!!");
    data.password = yield (0, bcrypt_1.hashPassword)(data.password);
    yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        yield tx.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                role: client_1.Role.DOCTOR,
            },
        });
        doctor = yield tx.doctor.create({ data });
    }));
    if (!doctor)
        throw new ApiError_1.default(400, "Failed to create doctor!!");
    return doctor;
});
const getDoctor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const doctor = yield prisma_1.default.doctor.findUnique({ where: { id }, select: constant_1.select });
    if (!doctor)
        throw new ApiError_1.default(404, "Doctor not found!!");
    return doctor;
});
const getDoctors = (_a, options) => __awaiter(void 0, void 0, void 0, function* () {
    var { searchTerm } = _a, filtersData = __rest(_a, ["searchTerm"]);
    const { page, limit, skip, sortBy, sortOrder } = (0, pagination_1.calculatePagination)(options);
    const pipeline = [];
    if (searchTerm) {
        pipeline.push({
            OR: constant_1.doctorSearchableFields.map((field) => ({
                [field]: { contains: searchTerm, mode: "insensitive" },
            })),
        });
    }
    if (Object.keys(filtersData).length > 0) {
        pipeline.push({
            AND: Object.keys(filtersData).map((key) => ({
                [key]: { equals: filtersData[key] },
            })),
        });
    }
    const where = pipeline.length > 0 ? { AND: pipeline } : {};
    const result = yield prisma_1.default.doctor.findMany({
        where,
        select: constant_1.select,
        skip,
        take: limit,
        orderBy: sortBy && sortOrder ? { [sortBy]: sortOrder } : { createdAt: "desc" },
    });
    const total = yield prisma_1.default.doctor.count({ where });
    return {
        meta: { page, limit, total },
        data: result,
    };
});
exports.DoctorService = { createDoctor, getDoctor, getDoctors };
