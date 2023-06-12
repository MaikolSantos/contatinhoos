import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors";
import { IListContacts, TContactsResponse } from "../../interfaces/contacts.interface";
import { contactsSchemaResponse } from "../../schemas/contacts.schema";
import { userSchemaResponse } from "../../schemas/users.schema";

const listConctactService = async (
  userId: number
): Promise<IListContacts> => {
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

  const userResponse = userSchemaResponse.parse(user)

  const contactsResponse = contactsSchemaResponse.parse(contacts);

  const data = {
    user: userResponse,
    contacts: contactsResponse
  }

  return data;
};

export { listConctactService };
