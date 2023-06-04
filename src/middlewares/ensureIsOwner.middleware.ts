import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contacts.entity";

const ensureIsOwnerMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const contactReposytory = AppDataSource.getRepository(Contact);

  const contactId: number = Number(request.params.id);
  const userId = Number(response.locals.userId);

  const contact = await contactReposytory.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    return response.status(404).json({ message: "Contact not found" });
  }

  if (contact.user.id !== userId) {
    return response.status(403).json({ messae: "User without permission" });
  }

  return next();
};

export { ensureIsOwnerMiddleware };
