import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  contactSchema,
  contactSchemaRequest,
  contactsSchemaResponse,
} from "../schemas/contacts.schema";

type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactsResponse = z.infer<typeof contactsSchemaResponse>;
type TContactUpdate = DeepPartial<TContactRequest>;

export { TContact, TContactRequest, TContactsResponse, TContactUpdate };
