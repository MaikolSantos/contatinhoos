import { Request, Response } from "express";
import { updateConctactService } from "../../services/contacts/update";

const updateConctactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = Number(request.params.id);
  const data = request.body;

  const contact = await updateConctactService(data, contactId);

  return response.status(200).json(contact);
};

export { updateConctactController };
