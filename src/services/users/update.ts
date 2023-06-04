import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors";
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interface";
import { userSchemaResponse } from "../../schemas/users.schema";

const updateUserService = async (
  data: TUserUpdate,
  userId: number
): Promise<TUserResponse> => {
  const userRespository = AppDataSource.getRepository(User);

  const oldUser: User | null = await userRespository.findOneBy({
    id: userId,
  });

  if (!oldUser) {
    throw new AppError("User not found", 404);
  }

  const newUser: User = userRespository.create({
    ...oldUser,
    ...data,
  });

  await userRespository.save(newUser);

  return userSchemaResponse.parse(newUser);
};

export { updateUserService };
