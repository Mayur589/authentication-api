import { auth } from "express-oauth2-jwt-bearer";
import dotenv from "dotenv";

dotenv.config();

const AUDIENCE = process.env.AUTH0_AUDIENCE;
const BASE_URL = process.env.AUTH0_DOMAIN;

export const JWTcheck = auth({
  audience: AUDIENCE,
  issuerBaseURL: BASE_URL,
  tokenSigningAlg: "RS256"
});

