import { Request, Response } from "express";
import { DetalleVueloService } from "@/services/detalleVuelo.services";

const service = new DetalleVueloService();

export class DetalleVueloController {
  async getAll(req: Request, res: Response) {
    res.json(await service.getAll());
  }

  async getById(req: Request, res: Response) {
    res.json(await service.getById(req.params.id));
  }

  async create(req: Request, res: Response) {
    res.status(201).json(await service.create(req.body));
  }

  async update(req: Request, res: Response) {
    res.json(await service.update(req.params.id, req.body));
  }

  async delete(req: Request, res: Response) {
    await service.delete(req.params.id);
    res.status(204).send();
  }
}
