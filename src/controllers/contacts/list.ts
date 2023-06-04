import { Request, Response } from "express";
import { TUserRequest } from "../../interfaces/users.interface";
import { createUserService } from "../../services/users/create";
import { listConctactService } from "../../services/contacts/list";

const listConctactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = response.locals.userId;

  const contacts = await listConctactService(userId);

  return response.status(200).json(contacts);
};

export { listConctactController };
