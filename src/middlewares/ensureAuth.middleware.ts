import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureAuthMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({ message: "Invalid token" });
  }

  const splitToken = token.split(" ")[1];

  jwt.verify(splitToken, process.env.SECRET_KEY!, (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "Invalid token" });
    }

    response.locals.userId = decoded?.sub;

    return next();
  });
};

export { ensureAuthMiddleware };
