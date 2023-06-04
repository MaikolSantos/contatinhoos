import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors";
import { TLoginRequest } from "../../interfaces/login.interface";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createTokenService = async ({
  email,
  password,
}: TLoginRequest): Promise<string> => {
  const userRespository = AppDataSource.getRepository(User);

  const user = await userRespository.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError("Invalid email or password", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid email or password", 403);
  }

  const token = jwt.sign(
    {
      email: user.email,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "1h",
      subject: String(user.id),
    }
  );

  return token;
};

export { createTokenService };
