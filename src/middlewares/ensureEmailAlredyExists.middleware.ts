import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { User } from "../entities/users.entity";

const ensureEmailAlredyExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const email = request.body.email;

  const findUser = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (findUser) {
    throw new AppError("E-mail alredy exists", 409);
  }

  return next();
};

export { ensureEmailAlredyExists };
