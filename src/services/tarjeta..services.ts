import { AppDataSource } from "@/config/database";
import { Tarjeta } from "../entities/Tarjeta";

export class TarjetaService {
  private tarjetaRepository = AppDataSource.getRepository(Tarjeta);

  async getAll() {
    return await this.tarjetaRepository.find({ relations: ["idPagadorFk"] });
  }

  async getById(idTarjeta: string) {
    return await this.tarjetaRepository.findOne({
      where: { idTarjeta },
      relations: ["idPagadorFk"]
    });
  }

  async create(data: Partial<Tarjeta>) {
    const tarjeta = this.tarjetaRepository.create(data);
    return await this.tarjetaRepository.save(tarjeta);
  }

  async update(idTarjeta: string, data: Partial<Tarjeta>) {
    await this.tarjetaRepository.update({ idTarjeta }, data);
    return this.getById(idTarjeta);
  }

  async delete(idTarjeta: string) {
    return await this.tarjetaRepository.delete({ idTarjeta });
  }
}
