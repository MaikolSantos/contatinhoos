import express, { Application, json, Response } from "express";
import { errorHandler } from "./errors";
import "express-async-errors";


const app: Application = express();
app.use(json());

app.get("/", (req, res) => res.send("hello world"))

app.use(errorHandler);

export default app;