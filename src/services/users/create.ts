import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import {
  TUser,
  TUserRequest,
  TUserResponse,
} from "../../interfaces/users.interface";
import { userSchemaResponse } from "../../schemas/users.schema";

const createUserService = async (
  data: TUserRequest
): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user: TUser = userRepository.create(data);

  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};

export { createUserService };
