import dotenv from "dotenv";

dotenv.config();

const pnv = process.env;

export default {
  env: pnv.NODE_ENV,
  port: pnv.PORT,
  bcrypt_slat_round: pnv.BCRYPT_SALT_ROUNDS,
};
