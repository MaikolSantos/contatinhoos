import express, { Application, json, Request, Response } from "express";
import { errorHandler } from "./errors";
import "express-async-errors";
import { usersRoutes } from "./routers/users.routes";
import { loginRoutes } from "./routers/login.routes";
import { contactsRoutes } from "./routers/contacts.routes";
import { pdfRoutes } from "./routers/pdf.routes";

const app: Application = express();
app.use(json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);
app.use("/pdf", pdfRoutes)

app.use(errorHandler);

export default app;
