import config from "../config";
import { compare, hash } from "bcrypt";

const hashPassword = async (password: string): Promise<string> => {
  return await hash(password, Number(config.bcrypt_slat_round));
};

const matchPassword = async (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> => {
  return await compare(givenPassword, savedPassword);
};

export { hashPassword, matchPassword };
