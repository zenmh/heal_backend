import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { DoctorService } from "./service";
import sendResponse from "../../../shared/sendResponse";
import { Doctor } from "@prisma/client";
import pick from "../../../shared/pick";
import { doctorFilterableFields } from "./constant";
import paginationFields from "../../../constants/pagination";
import { IDoctorWithoutPassword } from "./interface";

const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const data = await DoctorService.createDoctor(req.body);

  sendResponse<Doctor>(res, {
    statusCode: 200,
    success: true,
    message: "Doctor created successfully!!",
    data,
  });
});

const getDoctor = catchAsync(async (req: Request, res: Response) => {
  const data = await DoctorService.getDoctor(req.params.id);

  sendResponse<IDoctorWithoutPassword>(res, {
    statusCode: 200,
    success: true,
    message: "Doctor retrieved successfully!",
    data,
  });
});

const getDoctors = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, doctorFilterableFields);
  const options = pick(req.query, paginationFields);

  const { data, meta } = await DoctorService.getDoctors(filters, options);

  sendResponse<IDoctorWithoutPassword[]>(res, {
    statusCode: 200,
    success: true,
    message: "Doctors retrieved successfully!",
    meta,
    data,
  });
});

export const DoctorController = { createDoctor, getDoctor, getDoctors };
