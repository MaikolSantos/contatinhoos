import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entite.index";
import { AppError } from "../../errors";
import {
  TUser,
  TUserRequest,
  TUserResponse,
} from "../../interfaces/users.interface";
import { userSchemaResponse } from "../../schemas/users.schema";

const createUserService = async ({
  name,
  email,
  phone,
  password,
}: TUserRequest): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (findUser) {
    throw new AppError("User alredy exists", 409);
  }

  const user: TUser = userRepository.create({
    name,
    email,
    phone,
    password,
  });

  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};

export { createUserService };
