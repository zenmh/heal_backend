import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./service";
import sendResponse from "../../../shared/sendResponse";
import { User } from "@prisma/client";

const getUser = catchAsync(async (req: Request, res: Response) => {
  const data = await UserService.getUser(req.params.id);

  sendResponse<User>(res, {
    statusCode: 200,
    success: true,
    message: "User retrieved successfully!",
    data,
  });
});

export const UserController = { getUser };
