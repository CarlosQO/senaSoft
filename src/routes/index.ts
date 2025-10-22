import { Router, Request, Response } from "express";
import pasajeroRoutes from "@/routes/pasajeroRoutes";

const routes = Router();

routes.use("/pasajero", pasajeroRoutes);

routes.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Servidor funcionando correctamente",
    timestamp: new Date().toISOString,
  });
});

export default routes;