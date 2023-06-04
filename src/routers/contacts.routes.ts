import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid";
import { createConctactController } from "../controllers/contacts/create";
import { listConctactController } from "../controllers/contacts/list";
import { updateConctactController } from "../controllers/contacts/update";
import { deleteConctactController } from "../controllers/contacts/delete";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contacts.schema";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import { ensureNameAlredyExists } from "../middlewares/ensureNameAlredyExists.middleware";

const contactsRoutes = Router();

contactsRoutes.use(ensureAuthMiddleware);

contactsRoutes.post(
  "",
  ensureDataIsValidMiddleware(contactSchemaRequest),
  ensureNameAlredyExists,
  createConctactController
);

contactsRoutes.get("", listConctactController);

contactsRoutes.patch(
  "/:id",
  ensureIsOwnerMiddleware,
  ensureDataIsValidMiddleware(contactSchemaUpdate),
  ensureNameAlredyExists,
  updateConctactController
);

contactsRoutes.delete("/:id", ensureIsOwnerMiddleware, deleteConctactController);

export { contactsRoutes };
