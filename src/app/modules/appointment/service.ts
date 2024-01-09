import { Appointment } from "@prisma/client";
import prisma from "../../../constants/prisma";
import ApiError from "../../../errors/ApiError";

const createAppointment = async (data: Appointment): Promise<Appointment> => {
  const appointment = await prisma.appointment.create({ data });

  if (!appointment) throw new ApiError(400, "Failed to book appointment!!");

  return appointment;
};

export const AppointmentService = { createAppointment };
