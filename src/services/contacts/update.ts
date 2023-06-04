import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors";
import {
  TContact,
  TContactUpdate,
} from "../../interfaces/contacts.interface";
import { contactSchema } from "../../schemas/contacts.schema";

const updateConctactService = async (
  data: TContactUpdate,
  contactId: number
): Promise<TContact> => {
  const contactRespository = AppDataSource.getRepository(Contact);

  const oldContact: Contact | null = await contactRespository.findOneBy({
    id: contactId,
  });

  if (!oldContact) {
    throw new AppError("Contact not found", 404);
  }

  const newContact: Contact = contactRespository.create({
    ...oldContact,
    ...data,
  });

  await contactRespository.save(newContact);

  return contactSchema.parse(newContact);
};

export { updateConctactService };
