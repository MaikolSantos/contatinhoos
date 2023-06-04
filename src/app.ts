import express, { Application, json, Response } from "express";
import { errorHandler } from "./errors";
import "express-async-errors";
import { usersRoutes } from "./routers/users.routes";
import { loginRoutes } from "./routers/login.routes";
import { contactsRoutes } from "./routers/contacts.routes";

const app: Application = express();
app.use(json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);

app.use(errorHandler);

export default app;
