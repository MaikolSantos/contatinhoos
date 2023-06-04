import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contacts.entity";
import { AppError } from "../errors";

const ensureNameAlredyExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const email = request.body.email;

  const findContact = await contactRepository.findOne({
    where: {
      email,
    },
  });

  if (findContact) {
    throw new AppError("Name alredy exists", 409);
  }

  return next();
};

export { ensureNameAlredyExists };
