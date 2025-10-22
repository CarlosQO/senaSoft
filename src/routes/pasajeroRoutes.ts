import { Router } from "express";
import { PasajeroController } from "../controllers/pasajero.controller";


const routes = Router();
const pasajeroController = new PasajeroController();

// Crear pasajero
routes.post("/", pasajeroController.crearPasajero);

// Obtener todos los pasajeros
routes.get("/", pasajeroController.obtenerPasajeros);

export default routes;
