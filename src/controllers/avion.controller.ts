import { Request, Response } from "express";
import { AvionService } from "@/services/avion.services";

export class AvionController {
  private readonly avionService = new AvionService();

  crearAvion = async (req: Request, res: Response): Promise<void> => {
    try {
      const avion = await this.avionService.crearAvion(req.body);
      res.status(201).json({
        status: "SUCCESS",
        message: "Avión creado exitosamente",
        data: avion,
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        message: "Error al crear avión",
        data: null,
      });
    }
  };

  obtenerTodos = async (req: Request, res: Response): Promise<void> => {
    try {
      const aviones = await this.avionService.obtenerTodos();
      res.status(200).json({
        status: "SUCCESS",
        message: "Aviones obtenidos exitosamente",
        data: aviones,
      });
    } catch (error) {
      res.status(500).json({
        status: "ERROR",
        message: "Error al obtener aviones",
        data: null,
      });
    }
  };

  obtenerPorId = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const avion = await this.avionService.obtenerPorId(id);
      if (!avion) {
        res.status(404).json({
          status: "ERROR",
          message: "Avión no encontrado",
          data: null,
        });
        return;
      }
      res.status(200).json({
        status: "SUCCESS",
        message: "Avión obtenido exitosamente",
        data: avion,
      });
    } catch (error) {
      res.status(500).json({
        status: "ERROR",
        message: "Error al obtener avión",
        data: null,
      });
    }
  };

  actualizarAvion = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const actualizado = await this.avionService.actualizarAvion(id, req.body);
      res.status(200).json({
        status: "SUCCESS",
        message: "Avión actualizado exitosamente",
        data: actualizado,
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        message: "Error al actualizar avión",
        data: null,
      });
    }
  };

  eliminarAvion = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const eliminado = await this.avionService.eliminarAvion(id);
      res.status(200).json({
        status: "SUCCESS",
        message: "Avión eliminado exitosamente",
        data: eliminado,
      });
    } catch (error) {
      res.status(400).json({
        status: "ERROR",
        message: "Error al eliminar avión",
        data: null,
      });
    }
  };
}
