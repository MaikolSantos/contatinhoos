import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors";
import { TContact, TContactRequest } from "../../interfaces/contacts.interface";
import { contactSchema } from "../../schemas/contacts.schema";

const createConctactService = async (
  data: TContactRequest,
  userId: number
): Promise<TContact> => {
  const userRespository = AppDataSource.getRepository(User);
  const contactRespository = AppDataSource.getRepository(Contact);

  const user: User | null = await userRespository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contact: Contact = contactRespository.create({
    ...data,
    user,
  });

  await contactRespository.save(contact);

  return contactSchema.parse(contact);
};

export { createConctactService };
