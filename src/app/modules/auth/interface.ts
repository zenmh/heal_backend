import { User } from "@prisma/client";

type ISignIn = {
  email: string;
  password: string;
};

type ISignInResponse = {
  accessToken: string;
  refreshToken?: string;
};

type ISignUpResponse = {
  result: User;
} & ISignInResponse;

export { ISignIn, ISignInResponse, ISignUpResponse };
