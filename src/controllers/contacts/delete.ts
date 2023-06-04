import { Request, Response } from "express";
import { deleteConctactService } from "../../services/contacts/delete";

const deleteConctactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = Number(request.params.id);

  deleteConctactService(contactId);

  return response.status(204).send();
};

export { deleteConctactController };
