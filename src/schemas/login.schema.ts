import { z } from "zod";

const loginSchemaRequest = z.object({
  email: z.string().email().max(127),
  password: z.string(),
});

export { loginSchemaRequest };
