"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZCreateDoctor = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
const ZDoctorReview = zod_1.z.object({});
const ZCreateDoctor = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required!!" }),
        email: zod_1.z.string({ required_error: "Email is required!!" }).email(),
        password: zod_1.z.string({ required_error: "Password is required!!" }),
        contactNo: zod_1.z.string({ required_error: "Contact number is required!!" }),
        image: zod_1.z.string().optional(),
        experiences: zod_1.z.string({ required_error: "Experiences is required!!" }),
        speciality: zod_1.z.enum([...Object.keys(client_1.Speciality)]),
        branch: zod_1.z
            .enum([...Object.keys(client_1.Branch)])
            .default(client_1.Branch.DHAKA),
    }),
    reviews: zod_1.z.array(ZDoctorReview).optional(),
});
exports.ZCreateDoctor = ZCreateDoctor;
