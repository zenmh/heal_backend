import { User } from "@prisma/client";
import prisma from "../../../constants/prisma";
import ApiError from "../../../errors/ApiError";

const getUser = async (id: string): Promise<User> => {
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) throw new ApiError(404, "User not found!!");

  return user;
};

export const UserService = { getUser };
