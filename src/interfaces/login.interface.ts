import { z } from "zod";
import { loginSchemaRequest } from "../schemas/login.schema";

type TLoginRequest = z.infer<typeof loginSchemaRequest>;

export { TLoginRequest };
