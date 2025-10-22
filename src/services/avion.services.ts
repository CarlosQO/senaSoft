import { Repository } from "typeorm";
import { AppDataSource } from "../config/database";
import { Avion } from "../entities/Avion";
import { ModeloAvion } from "../entities/ModeloAvion";

export class AvionService {
  private readonly avionRepository: Repository<Avion>;
  private readonly modeloRepository: Repository<ModeloAvion>;

  constructor() {
    this.avionRepository = AppDataSource.getRepository(Avion);
    this.modeloRepository = AppDataSource.getRepository(ModeloAvion);
  }

  async crearAvion(avionData: Partial<Avion>): Promise<Avion> {
    const modelo = await this.modeloRepository.findOne({
      where: { idModelo: avionData.idModeloFk },
    });
    if (!modelo) {
      throw new Error("El modelo de avión especificado no existe");
    }

    const avion = this.avionRepository.create(avionData);
    return await this.avionRepository.save(avion);
  }

  async obtenerTodos(): Promise<Avion[]> {
    return await this.avionRepository.find({
      relations: ["idModeloFk"],
    });
  }

  async obtenerPorId(id: string): Promise<Avion | null> {
    return await this.avionRepository.findOne({
      where: { idAvion: id },
      relations: ["idModeloFk"],
    });
  }

  async actualizarAvion(id: string, avionData: Partial<Avion>): Promise<Avion | null> {
    const avion = await this.avionRepository.findOne({ where: { idAvion: id } });
    if (!avion) return null;

    await this.avionRepository.update(id, avionData);
    return await this.obtenerPorId(id);
  }

  async eliminarAvion(id: string): Promise<boolean> {
    const resultado = await this.avionRepository.delete(id);
    return resultado.affected !== 0;
  }
}
