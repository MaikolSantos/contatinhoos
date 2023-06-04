import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid";
import { loginSchemaRequest } from "../schemas/login.schema";
import { createTokenController } from "../controllers/login/create";

const loginRoutes = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddleware(loginSchemaRequest),
  createTokenController
);

export { loginRoutes };
