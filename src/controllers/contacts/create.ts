import { Request, Response } from "express";
import { createConctactService } from "../../services/contacts/create";

const createConctactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = response.locals.userId;
  const data = request.body;

  const newContact = await createConctactService(data, userId);

  return response.status(201).json(newContact);
};

export { createConctactController };
