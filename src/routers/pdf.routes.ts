import { Router } from "express";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { generatePDFController } from "../controllers/pdf/generate";
import { createPDFController } from "../controllers/pdf/create";

const pdfRoutes = Router();

pdfRoutes.get("/create", ensureAuthMiddleware, createPDFController);

pdfRoutes.get("/generate/", generatePDFController);

export { pdfRoutes };
