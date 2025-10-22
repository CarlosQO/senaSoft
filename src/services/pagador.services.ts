import { Repository } from "typeorm";
import { AppDataSource } from "../config/database";
import { Pagador } from "../entities/Pagador";
import { Tarjeta } from "../entities/Tarjeta";
import { Vuelo } from "../entities/Vuelo";

export class PagadorService {
  private readonly pagadorRepository: Repository<Pagador>;
  private readonly tarjetaRepository: Repository<Tarjeta>;
  private readonly vueloRepository: Repository<Vuelo>;

  constructor() {
    this.pagadorRepository = AppDataSource.getRepository(Pagador);
    this.tarjetaRepository = AppDataSource.getRepository(Tarjeta);
    this.vueloRepository = AppDataSource.getRepository(Vuelo);
  }

  async crearPagador(data: Partial<Pagador>): Promise<Pagador> {
    // Verificar email único si aplica
    if (data.correo) {
      const exist = await this.pagadorRepository.findOne({ where: { correo: data.correo } });
      if (exist) throw new Error("Correo ya registrado para un pagador.");
    }

    // Validar vuelo asociado
    if (!data.idVueloFk) throw new Error("Debe indicar el vuelo asociado.");
    const idVuelo = (data.idVueloFk as any).idVuelo || (data as any).id_vuelo_FK;
    const vuelo = await this.vueloRepository.findOne({ where: { idVuelo } as any });
    if (!vuelo) throw new Error("Vuelo relacionado no existe.");

    const pagador = this.pagadorRepository.create(data);
    return await this.pagadorRepository.save(pagador);
  }

  async obtenerTodos(): Promise<Pagador[]> {
    return await this.pagadorRepository.find({ relations: ["idTarjetaFk", "idVueloFk"] });
  }

  async obtenerPorId(id: string): Promise<Pagador | null> {
    return await this.pagadorRepository.findOne({ where: { idPagador: id }, relations: ["idTarjetaFk", "idVueloFk"] });
  }

  async actualizarPagador(id: string, data: Partial<Pagador>): Promise<Pagador | null> {
    const pagador = await this.pagadorRepository.findOne({ where: { idPagador: id } });
    if (!pagador) return null;
    await this.pagadorRepository.update({ idPagador: id }, data);
    return await this.obtenerPorId(id);
  }

  async eliminarPagador(id: string): Promise<boolean> {
    const resultado = await this.pagadorRepository.delete({ idPagador: id });
    return resultado.affected !== 0;
  }

  /**
   * Simula el pago: valida tarjeta (si aplica) y crea relación.
   * Retorna un objeto con resultado y referencia (simulada).
   */
  async procesarPagoSimulado(pagadorId: string, tarjetaId?: string, monto?: number): Promise<{ success: boolean; reference?: string; message?: string }> {
    const pagador = await this.pagadorRepository.findOne({ where: { idPagador: pagadorId } });
    if (!pagador) throw new Error("Pagador no existe.");

    if (tarjetaId) {
      const tarjeta = await this.tarjetaRepository.findOne({ where: { idTarjeta: tarjetaId } });
      if (!tarjeta) throw new Error("Tarjeta no existe.");
      // Aquí podrías validar CVV, fecha, saldo simulado, etc.
    }

    // Simulación simple: generamos referencia aleatoria
    const reference = `PAY-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    return { success: true, reference, message: "Pago simulado exitoso." };
  }
}
