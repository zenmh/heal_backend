import { Doctor, Role } from "@prisma/client";
import prisma from "../../../constants/prisma";
import ApiError from "../../../errors/ApiError";
import { hashPassword } from "../../../helpers/bcrypt";

const createDoctor = async (data: Doctor): Promise<Doctor> => {
  let doctor;

  const isExist = await prisma.user.findFirst({
    where: { name: data.name, email: data.email },
  });

  if (isExist) throw new ApiError(409, "The user is already registered!!");

  data.password = await hashPassword(data.password);

  await prisma.$transaction(async (tx) => {
    await tx.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        role: Role.DOCTOR,
      },
    });

    doctor = await tx.doctor.create({ data });
  });

  if (!doctor) throw new ApiError(400, "Failed to create doctor!!");

  return doctor;
};

export const DoctorService = { createDoctor };
