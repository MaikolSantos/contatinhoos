import express, { Application, json, Response } from "express";
import { errorHandler } from "./errors";
import "express-async-errors";
import { usersRoutes } from "./routers/users.routes";

const app: Application = express();
app.use(json());

app.use("/users", usersRoutes);

app.use(errorHandler);

export default app;
