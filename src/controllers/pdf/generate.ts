import { Request, Response } from "express";
import ejs from "ejs";
import path from "path";
import { listConctactService } from "../../services/contacts/list";

const generatePDFController = async (
  request: Request,
  response: Response
): Promise<void> => {
  const userId: number = response.locals.userId;

  const contacts = await listConctactService(userId);

  const filePath = path.join(__dirname, "print.ejs");

  ejs.renderFile(filePath, { contacts }, (error, html) => {
    if (error) {
      return response.send("File error");
    }

    return response.send(html);
  });
};

export { generatePDFController };
