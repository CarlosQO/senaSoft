import { AppDataSource } from "@/config/database";
import { DetalleVuelo } from "../entities/DetalleVuelo";

export class DetalleVueloService {
  private detalleRepository = AppDataSource.getRepository(DetalleVuelo);

  async getAll() {
    return await this.detalleRepository.find({
      relations: ["idVueloFk", "idAvionFk", "idPasajeroFk"]
    });
  }

  async getById(idDetalleVuelo: string) {
    return await this.detalleRepository.findOne({
      where: { idDetalleVuelo },
      relations: ["idVueloFk", "idAvionFk", "idPasajeroFk"]
    });
  }

  async create(data: Partial<DetalleVuelo>) {
    const detalle = this.detalleRepository.create(data);
    return await this.detalleRepository.save(detalle);
  }

  async update(idDetalleVuelo: string, data: Partial<DetalleVuelo>) {
    await this.detalleRepository.update({ idDetalleVuelo }, data);
    return this.getById(idDetalleVuelo);
  }

  async delete(idDetalleVuelo: string) {
    return await this.detalleRepository.delete({ idDetalleVuelo });
  }
}
