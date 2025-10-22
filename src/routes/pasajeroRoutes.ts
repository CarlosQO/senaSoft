import { Router } from "express";
import { PasajeroController } from "../controllers/pasajero.controller";


const routes = Router();
const pasajeroController = new PasajeroController();

// Crear pasajero
routes.post("/", pasajeroController.crearPasajero);

// Obtener todos los pasajeros
routes.get("/", pasajeroController.obtenerPasajeros);

export default routes;
/*
import { Router } from "express";
import { RolController } from "../controllers/RolController";

const router = Router();
const rolController = new RolController();

router.post("/", rolController.crearRol);
router.get("/", rolController.obtenerTodoLosRoles);
router.get("/activos", rolController.obtenerRolesActivos);
router.get("/:id", rolController.obtenerRolPorId);
router.put("/:id", rolController.actualizarRol);
router.delete("/:id", rolController.eliminarRol);

export default router;
*/