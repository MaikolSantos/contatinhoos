import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaUpdate,
} from "../schemas/users.schema";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUserUpdate = z.infer<typeof userSchemaUpdate>;

export { TUser, TUserRequest, TUserResponse, TUserUpdate };
