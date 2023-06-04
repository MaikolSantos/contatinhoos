import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors";
import { TContactsResponse } from "../../interfaces/contacts.interface";
import { contactsSchemaResponse } from "../../schemas/contacts.schema";

const listConctactService = async (
  userId: number
): Promise<TContactsResponse> => {
  const userRespository = AppDataSource.getRepository(User);
  const contactRespository = AppDataSource.getRepository(Contact);

  const user: User | null = await userRespository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contacts: Contact[] = await contactRespository.find({
    where: {
      user: user,
    },
  });

  return contactsSchemaResponse.parse(contacts);
};

export { listConctactService };
