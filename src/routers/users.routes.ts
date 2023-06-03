import { Router } from "express";
import { createUserController } from "../controllers/users/create";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid";
import { userSchemaRequest } from "../schemas/users.schema";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  createUserController
);

export { usersRoutes };
