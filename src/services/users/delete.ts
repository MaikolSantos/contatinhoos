import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors";

const deleteUserService = async (userId: number): Promise<void> => {
  const userRespository = AppDataSource.getRepository(User);

  const user: User | null = await userRespository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  await userRespository.delete(userId)
};

export { deleteUserService };
