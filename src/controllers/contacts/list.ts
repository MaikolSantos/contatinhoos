import { Request, Response } from "express";
import { listConctactService } from "../../services/contacts/list";

const listConctactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = response.locals.userId;

  const contacts = await listConctactService(userId);

  response.locals.contacts = contacts

  return response.status(200).json(contacts);
};

export { listConctactController };
