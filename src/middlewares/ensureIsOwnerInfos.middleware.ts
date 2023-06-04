import { Request, Response, NextFunction } from "express";

const ensureIsOwnerInfosMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const paramsId = Number(request.params.id);
  const userId = Number(response.locals.userId);

  if (paramsId !== userId) {
    return response.status(403).json({ messae: "User without permission" });
  }

  return next();
};

export { ensureIsOwnerInfosMiddleware };
