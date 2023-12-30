import { User } from "@prisma/client";
import { ISignUpResponse } from "./interface";
import prisma from "../../../constants/prisma";
import ApiError from "../../../errors/ApiError";
import { createToken } from "../../../helpers/jwt";
import { hashPassword } from "../../../helpers/bcrypt";

const signUp = async (data: User): Promise<ISignUpResponse> => {
  const isExist = await prisma.user.findFirst({
    where: { name: data.name, email: data.email },
  });

  if (isExist) throw new ApiError(409, "The user is already exist!!");

  data.password = await hashPassword(data.password);

  const user = await prisma.user.create({ data });

  const accessToken = createToken(
    { userId: user.id, role: user.role },
    "access"
  );
  const refreshToken = createToken(
    { userId: user.id, role: user.role },
    "refresh"
  );

  return { accessToken, refreshToken, result: user };
};
