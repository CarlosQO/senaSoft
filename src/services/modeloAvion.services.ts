import { Repository } from "typeorm";
import { AppDataSource } from "../config/database";
import { ModeloAvion } from "../entities/ModeloAvion";

export class ModeloAvionService {
  private readonly modeloRepository: Repository<ModeloAvion>;

  constructor() {
    this.modeloRepository = AppDataSource.getRepository(ModeloAvion);
  }

  async crearModelo(modeloData: Partial<ModeloAvion>): Promise<ModeloAvion> {
    const modelo = this.modeloRepository.create(modeloData);
    return await this.modeloRepository.save(modelo);
  }

  async obtenerTodos(): Promise<ModeloAvion[]> {
    return await this.modeloRepository.find();
  }

  async obtenerPorId(id: string): Promise<ModeloAvion | null> {
    return await this.modeloRepository.findOne({ where: { idModelo: id } });
  }

  async actualizarModelo(id: string, modeloData: Partial<ModeloAvion>): Promise<ModeloAvion | null> {
    const modelo = await this.modeloRepository.findOne({ where: { idModelo: id } });
    if (!modelo) return null;

    await this.modeloRepository.update(id, modeloData);
    return await this.obtenerPorId(id);
  }

  async eliminarModelo(id: string): Promise<boolean> {
    const resultado = await this.modeloRepository.delete(id);
    return resultado.affected !== 0;
  }
}
