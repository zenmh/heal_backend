import config from "../config";
import { JwtPayload, Secret, sign, verify } from "jsonwebtoken";

const createToken = (
  payload: Record<string, unknown>,
  tokenType: "access" | "refresh"
) => {
  if (tokenType === "access") {
    return sign(payload, config.jwt.secret as Secret, {
      expiresIn: config.jwt.expires_in,
    });
  } else {
    return sign(payload, config.jwt.refresh_secret as Secret, {
      expiresIn: config.jwt.refresh_expires_in,
    });
  }
};

const verifyToken = (token: string, secret: Secret): JwtPayload => {
  return verify(token, secret) as JwtPayload;
};

export { createToken, verifyToken };
