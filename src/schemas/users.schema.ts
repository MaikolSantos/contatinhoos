import { hashSync } from "bcryptjs";
import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(125),
  email: z.string().email().max(127),
  phone: z.string().max(19),
  password: z.string().transform((pass) => hashSync(pass, 10)),
  createdAt: z.string(),
});

const userSchemaRequest = userSchema.omit({ id: true, createdAt: true });

const userSchemaResponse = userSchema.omit({ password: true });

const usersSchemaResponse = userSchemaResponse.array();

const userSchemaUpdate = userSchema
  .omit({ id: true, createdAt: true })
  .partial();

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
  userSchemaUpdate,
};
