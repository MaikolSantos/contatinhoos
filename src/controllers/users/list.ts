import { Request, Response } from "express";
import { listUserService } from "../../services/users/list";

const listUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const users = await listUserService();

  return response.status(200).json(users);
};

export { listUserController };
