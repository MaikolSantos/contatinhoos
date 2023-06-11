import { Request, Response } from "express";
import puppeteer from "puppeteer";
import "dotenv/config";

const createPDFController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(process.env.BASE_URL + "/pdf/generate", {
    waitUntil: "networkidle0",
  });

  const pdf = await page.pdf({
    printBackground: true,
    format: "Letter",
  });

  await browser.close();

  response.contentType("application/pdf");

  return response.send(pdf);
};

export { createPDFController };
