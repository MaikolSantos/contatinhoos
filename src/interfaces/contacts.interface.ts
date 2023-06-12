import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  contactSchema,
  contactSchemaRequest,
  contactsSchemaResponse,
} from "../schemas/contacts.schema";
import { TUserResponse } from "./users.interface";

type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactsResponse = z.infer<typeof contactsSchemaResponse>;
type TContactUpdate = DeepPartial<TContactRequest>;

interface IListContacts {
  user: TUserResponse;
  contacts: TContactsResponse;
}

export { TContact, TContactRequest, TContactsResponse, TContactUpdate, IListContacts };
