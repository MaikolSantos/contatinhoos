import { Request, Response } from "express";
import { deleteUserService } from "../../services/users/delete";

const deleteUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = Number(request.params.id);

  deleteUserService(userId);

  return response.status(204).send();
};

export { deleteUserController };
