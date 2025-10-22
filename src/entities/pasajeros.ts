import { Column, Entity, Index } from "typeorm";

@Index("correo", ["correo"], { unique: true })
@Index("fk_pasajero_detalle", ["idDetalleVueloFk"], {})
@Entity("pasajeros", { schema: "senasoft" })
export class Pasajeros {
  @Column("varchar", { primary: true, name: "id_pasajero", length: 20 })
  idPasajero!: string;

  @Column("varchar", { name: "nombres", length: 191 })
  nombres!: string;

  @Column("varchar", { name: "primer_apellido", length: 191 })
  primerApellido!: string;

  @Column("varchar", { name: "segundo_apellido", length: 191 })
  segundoApellido!: string;

  @Column("int", { name: "genero" })
  genero!: number;

  @Column("varchar", { name: "tipo_doc", length: 25 })
  tipoDoc!: string;

  @Column("varchar", { name: "numero_doc", length: 15 })
  numeroDoc!: string;

  @Column("int", { name: "condicion_infante" })
  condicionInfante!: number;

  @Column("varchar", { name: "celular", length: 15 })
  celular!: string;

  @Column("varchar", { name: "correo", unique: true, length: 191 })
  correo!: string;

  @Column("varchar", { name: "id_detalle_vuelo_FK", nullable: true, length: 5 })
  idDetalleVueloFk!: string | null;
}
