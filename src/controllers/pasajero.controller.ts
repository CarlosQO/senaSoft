/*import { Request, Response } from "express";
import { PasajeroService } from "@/services/pasajeros.services";

export class PasajeroController {
  private readonly pasajeroService = new PasajeroService();

  crearPasajero = async (req: Request, res: Response): Promise<void> => {
    try {
      const pasajero = await this.pasajeroService.crearPasajero(req.body);
      res.status(201).json({
        status: "SUCCESS",
        message: "Pasajero creado exitosamente",
        data: pasajero,
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        message:
          error instanceof Error ? error.message : "Error al crear pasajero",
        data: null,
      });
    }
  };

  obtenerTodos = async (req: Request, res: Response): Promise<void> => {
    try {
      const pasajeros = await this.pasajeroService.obtenerTodos();
      res.status(200).json({
        status: "SUCCESS",
        message: "Pasajeros obtenidos exitosamente",
        data: pasajeros,
      });
    } catch (error) {
      res.status(500).json({
        status: "ERROR",
        message: "Error al obtener pasajeros",
        data: null,
      });
    }
  };

  obtenerPorId = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const pasajero = await this.pasajeroService.obtenerPorId(id);
      if (!pasajero) {
        res.status(404).json({
          status: "ERROR",
          message: "Pasajero no encontrado",
          data: null,
        });
        return;
      }
      res.status(200).json({
        status: "SUCCESS",
        message: "Pasajero obtenido exitosamente",
        data: pasajero,
      });
    } catch (error) {
      res.status(500).json({
        status: "ERROR",
        message: "Error al obtener pasajero",
        data: null,
      });
    }
  };

  actualizarPasajero = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const actualizado = await this.pasajeroService.actualizarPasajero(id, req.body);
      if (!actualizado) {
        res.status(404).json({
          status: "ERROR",
          message: "Pasajero no encontrado",
          data: null,
        });
        return;
      }
      res.status(200).json({
        status: "SUCCESS",
        message: "Pasajero actualizado exitosamente",
        data: actualizado,
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        message: "Error al actualizar pasajero",
        data: null,
      });
    }
  };

  eliminarPasajero = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const eliminado = await this.pasajeroService.eliminarPasajero(id);
      if (!eliminado) {
        res.status(404).json({
          status: "ERROR",
          message: "Pasajero no encontrado",
          data: null,
        });
        return;
      }
      res.status(200).json({
        status: "SUCCESS",
        message: "Pasajero eliminado exitosamente",
        data: eliminado,
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        message: "Error al eliminar pasajero",
        data: null,
      });
    }
  };
}*/
import { Request, Response } from "express";
import { PasajeroService } from "../services/pasajeros.services";

export class PasajeroController {
  private readonly pasajeroService: PasajeroService;

  constructor() {
    this.pasajeroService = new PasajeroService();
  }

  crearPasajero = async (req: Request, res: Response): Promise<void> => {
    try {
      const pasajero = await this.pasajeroService.crearPasajero(req.body);
      res.status(201).json({
        status: "SUCCESS",
        message: "Pasajero registrado correctamente",
        data: pasajero,
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        message:
          error instanceof Error ? error.message : "Error al registrar pasajero",
        data: null,
      });
    }
  };

  obtenerPasajeros = async (req: Request, res: Response): Promise<void> => {
    try {
      const pasajeros = await this.pasajeroService.obtenerPasajeros();
      res.status(200).json({
        status: "SUCCESS",
        message: "Pasajeros obtenidos correctamente",
        data: pasajeros,
      });
    } catch (error) {
      res.status(500).json({
        status: "ERROR",
        message: "Error al obtener pasajeros",
        data: null,
      });
    }
  };
}
