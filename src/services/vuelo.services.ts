import { Repository } from "typeorm";
import { AppDataSource } from "../config/database";
import { Pasajeros } from "@/entities/pasajeros";
import { DetalleVuelo } from "../entities/DetalleVuelo";

export class PasajeroService {
    private readonly pasajeroRepository: Repository<Pasajeros>;
    private readonly detalleVueloRepository: Repository<DetalleVuelo>;

    constructor() {
        this.pasajeroRepository = AppDataSource.getRepository(Pasajeros);
        this.detalleVueloRepository = AppDataSource.getRepository(DetalleVuelo);
    }

    async crearPasajero(data: Partial<Pasajeros>): Promise<Pasajeros> {
        
        if (!data.idDetalleVueloFk) {
            throw new Error("Falta el id del detalle de vuelo");
        }

        const detalle = await this.detalleVueloRepository.findOne({
            where: { idDetalleVuelo: data.idDetalleVueloFk },
        });
        if (!detalle) throw new Error("El detalle de vuelo especificado no existe");

        const pasajero = this.pasajeroRepository.create(data);
        return await this.pasajeroRepository.save(pasajero);
    }

    async obtenerTodos(): Promise<Pasajeros[]> {
        return await this.pasajeroRepository.find({
            relations: ["idDetalleVueloFk"],
        });
    }

    async obtenerPorId(id: string): Promise<Pasajeros | null> {
        return await this.pasajeroRepository.findOne({
            where: { idPasajero: id },
            relations: ["idDetalleVueloFk"],
        });
    }

    async actualizarPasajero(id: string, data: Partial<Pasajeros>): Promise<Pasajeros | null> {
        const pasajero = await this.pasajeroRepository.findOne({ where: { idPasajero: id } });
        if (!pasajero) return null;

        await this.pasajeroRepository.update(id, data);
        return await this.obtenerPorId(id);
    }

    async eliminarPasajero(id: string): Promise<boolean> {
        const resultado = await this.pasajeroRepository.delete(id);
        return resultado.affected !== 0;
    }
}
