import { DataSource } from "typeorm";
import { config } from "dotenv";
import { Usuario } from "../entities/Usuario";
import { Rol } from "../entities/Rol";

config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "3306"),
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "senasoft",
  synchronize: process.env.TYPEORM_SYNCHRONIZE === "true",
  logging: process.env.TYPEORM_LOGGING === "true",
  entities: [Usuario, Rol],
});

export const initializeDatabase = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.log("Base de datos conectada exitosamente");
  } catch (error) {
    console.error("Error al conectar con la base de datos: ", error);
    throw error;
  }
};
