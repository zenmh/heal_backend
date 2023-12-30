import { User } from "@prisma/client";

type ISignInResponse = {
  accessToken: string;
  refreshToken?: string;
};

type ISignUpResponse = {
  result: User;
} & ISignInResponse;

export { ISignInResponse, ISignUpResponse };
