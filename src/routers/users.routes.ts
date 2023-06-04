import { Router } from "express";
import { createUserController } from "../controllers/users/create";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schema";
import { ensureEmailAlredyExists } from "../middlewares/ensureEmailAlredyExists.middleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { listUserController } from "../controllers/users/list";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import { updateUsertController } from "../controllers/users/update";
import { ensureIsOwnerInfosMiddleware } from "../middlewares/ensureIsOwnerInfos.middleware";
import { deleteUserController } from "../controllers/users/delete";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  ensureEmailAlredyExists,
  createUserController
);

usersRoutes.get("", ensureAuthMiddleware, listUserController);

usersRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerInfosMiddleware,
  ensureDataIsValidMiddleware(userSchemaUpdate),
  updateUsertController
);

usersRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerInfosMiddleware,
  deleteUserController
);

export { usersRoutes };
