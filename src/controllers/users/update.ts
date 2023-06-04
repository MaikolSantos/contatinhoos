import { Request, Response } from "express";
import { updateUserService } from "../../services/users/update";

const updateUsertController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const data = request.body;
  const userId: number = Number(response.locals.userId);

  const contact = await updateUserService(data, userId);

  return response.status(200).json(contact);
};

export { updateUsertController };
