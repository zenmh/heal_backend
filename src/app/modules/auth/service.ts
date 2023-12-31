import { User } from "@prisma/client";
import prisma from "../../../constants/prisma";
import ApiError from "../../../errors/ApiError";
import { createToken } from "../../../helpers/jwt";
import { hashPassword, matchPassword } from "../../../helpers/bcrypt";
import { ISignIn, ISignInResponse, ISignUpResponse } from "./interface";

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

const singIn = async ({
  email,
  password,
}: ISignIn): Promise<ISignInResponse> => {
  const user = await prisma.user.findFirst({ where: { email } });

  if (!user) throw new ApiError(404, "User not found!!");

  const isPasswordMatch = await matchPassword(password, user.password);

  if (!isPasswordMatch) throw new ApiError(400, "Password is incorrect!!");

  const accessToken = createToken(
    { userId: user.id, role: user.role },
    "access"
  );
  const refreshToken = createToken(
    { userId: user.id, role: user.role },
    "refresh"
  );

  return { accessToken, refreshToken };
};

export const AuthService = { signUp, singIn };
