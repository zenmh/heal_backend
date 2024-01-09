import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { AppointmentService } from "./service";
import sendResponse from "../../../shared/sendResponse";
import { Appointment } from "@prisma/client";

const bookAnAppointment = catchAsync(async (req: Request, res: Response) => {
  const data = await AppointmentService.bookAnAppointment(req.body);

  sendResponse<Appointment>(res, {
    statusCode: 200,
    success: true,
    message: "Appointment booked successfully!",
    data,
  });
});

export const AppointmentController = { bookAnAppointment };
