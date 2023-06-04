import { Request, Response } from "express";
import { TUserRequest } from "../../interfaces/users.interface";
import { createUserService } from "../../services/users/create";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const data: TUserRequest = request.body;

  const newUser = await createUserService(data);

  return response.status(201).json(newUser);
};

export { createUserController };
