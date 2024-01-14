"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZBookAnAppointment = void 0;
const zod_1 = require("zod");
const ZBookAnAppointment = zod_1.z.object({
    body: zod_1.z.object({
        date: zod_1.z.string({ required_error: "Appointment date is required!!" }),
        slot: zod_1.z.string({ required_error: "Booking slot is required!!" }),
        name: zod_1.z.string({ required_error: "Name is required!!" }),
        contactNo: zod_1.z.string({ required_error: "Contact number is required!!" }),
        email: zod_1.z.string({ required_error: "Email is required!!" }),
        doctorId: zod_1.z.string({ required_error: "Doctor Id is required!!" }),
    }),
});
exports.ZBookAnAppointment = ZBookAnAppointment;
