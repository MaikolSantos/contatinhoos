import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors";
import { TContact, TContactRequest } from "../../interfaces/contacts.interface";
import { contactSchema } from "../../schemas/contacts.schema";

const deleteConctactService = async (contactId: number): Promise<void> => {
  const contactRespository = AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRespository.findOneBy({
    id: contactId,
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  await contactRespository.delete(contactId)
};

export { deleteConctactService };
