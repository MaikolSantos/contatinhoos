import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { TUsersResponse } from "../../interfaces/users.interface";
import { usersSchemaResponse } from "../../schemas/users.schema";

const listUserService = async (): Promise<TUsersResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  return usersSchemaResponse.parse(users);
};

export { listUserService };
