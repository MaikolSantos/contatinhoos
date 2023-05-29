import "dotenv/config";
import path from "path";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(__dirname,"./migrations/**.{ts,js}");

  const databaseURL: string | undefined = process.env.DATABASE_URL;

  if (!databaseURL) {
    throw new Error("Env var DATABASE_URL does not exist.");
  }

  return {
    type: "postgres",
    url: databaseURL!,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const AppDataSource: DataSource = new DataSource(dataSourceConfig());

export { AppDataSource };