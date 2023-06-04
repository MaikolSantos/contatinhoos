import { Request, Response } from "express";
import { createTokenService } from "../../services/login/create";

const createTokenController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { email, password } = request.body;

  const token = await createTokenService({ email, password });

  return response.status(200).json({ token: token });
};

export { createTokenController };
