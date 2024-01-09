import { Appointment } from "@prisma/client";
import prisma from "../../../constants/prisma";

const createAppointment = async (data: Appointment): Promise<Appointment> => {
  const result = await prisma.appointment.create({ data });

  return result;
};

export const AppointmentService = { createAppointment };
