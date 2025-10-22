import { Column, Entity, Index } from "typeorm";

@Index("fk_detalle_vuelo", ["idVueloFk"], {})
@Index("fk_detalle_avion", ["idAvionFk"], {})
@Index("fk_detalle_pasajero", ["idPasajeroFk"], {})
@Entity("detalle_vuelo", { schema: "senasoft" })
export class DetalleVuelo {
  @Column("varchar", { primary: true, name: "id_detalle_vuelo", length: 5 })
  idDetalleVuelo!: string;

  @Column("varchar", { name: "id_vuelo_FK", length: 5 })
  idVueloFk!: string;

  @Column("varchar", { name: "id_avion_FK", length: 5 })
  idAvionFk!: string;

  @Column("varchar", { name: "id_pasajero_FK", length: 20 })
  idPasajeroFk!: string;

  @Column("varchar", { name: "numero_asiento", length: 191 })
  numeroAsiento!: string;

  @Column("date", { name: "fecha_reserva" })
  fechaReserva!: string;
}
