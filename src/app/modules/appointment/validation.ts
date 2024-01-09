import { z } from "zod";

const ZBookAnAppointment = z.object({
  body: z.object({
    date: z.string({ required_error: "Appointment date is required!!" }),
    slot: z.string({ required_error: "Booking slot is required!!" }),
    name: z.string({ required_error: "Name is required!!" }),
    contactNo: z.string({ required_error: "Contact number is required!!" }),
    email: z.string({ required_error: "Email is required!!" }),
    doctorId: z.string({ required_error: "Doctor Id is required!!" }),
  }),
});

export { ZBookAnAppointment };
