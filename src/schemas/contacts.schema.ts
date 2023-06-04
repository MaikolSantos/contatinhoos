import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  name: z.string().max(125),
  email: z.string().email().max(127),
  phone: z.string().max(19),
});

const contactSchemaRequest = contactSchema.omit({ id: true });

const contactsSchemaResponse = contactSchema.array();

const contactSchemaUpdate = contactSchema.omit({ id: true }).partial();

export {
  contactSchema,
  contactSchemaRequest,
  contactsSchemaResponse,
  contactSchemaUpdate,
};
