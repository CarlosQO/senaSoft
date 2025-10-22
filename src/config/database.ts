import { DataSource } from "typeorm";
import { config } from "dotenv";
import { join } from "path";

config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "3306"),
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "senasoft",
  synchronize: false,
  logging: true,
  entities: [join(__dirname, "../entities/**/*.ts")], // carga todas las entidades generadas automáticamente
});

export const initializeDatabase = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.log(" Base de datos conectada exitosamente");
  } catch (error) {
    console.error(" Error al conectar con la base de datos: ", error);
    throw error;
  }
};
