import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaUpdate,
  usersSchemaResponse,
} from "../schemas/users.schema";
import { DeepPartial } from "typeorm";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUsersResponse = z.infer<typeof usersSchemaResponse>;
type TUserUpdate = DeepPartial<TUserRequest>;


export { TUser, TUserRequest, TUserResponse, TUsersResponse, TUserUpdate };
