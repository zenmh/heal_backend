"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.select = exports.doctorFilterableFields = exports.doctorSearchableFields = void 0;
const doctorSearchableFields = [
    "id",
    "name",
    "email",
    "contactNo",
    "branch",
    "speciality",
];
exports.doctorSearchableFields = doctorSearchableFields;
const doctorFilterableFields = [
    "searchTerm",
    "name",
    "email",
    "contactNo",
    "branch",
    "speciality",
];
exports.doctorFilterableFields = doctorFilterableFields;
const select = {
    id: true,
    name: true,
    email: true,
    password: false,
    contactNo: true,
    image: true,
    experiences: true,
    speciality: true,
    branch: true,
    reviews: true,
    createdAt: true,
    updatedAt: true,
};
exports.select = select;
