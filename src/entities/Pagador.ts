import { Column, Entity, Index } from "typeorm";

@Index("correo", ["correo"], { unique: true })
@Index("fk_pagador_vuelo", ["idVueloFk"], {})
@Index("fk_pagador_tarjeta", ["idTarjetaFk"], {})
@Entity("pagador", { schema: "senasoft" })
export class Pagador {
  @Column("varchar", { primary: true, name: "id_pagador", length: 5 })
  idPagador!: string;

  @Column("varchar", { name: "nombre_completo", length: 191 })
  nombreCompleto!: string;

  @Column("varchar", { name: "tipo_doc", length: 50 })
  tipoDoc!: string;

  @Column("varchar", { name: "numero_doc", length: 15 })
  numeroDoc!: string;

  @Column("varchar", { name: "correo", unique: true, length: 191 })
  correo!: string;

  @Column("varchar", { name: "telefono", length: 15 })
  telefono!: string;

  @Column("varchar", { name: "id_vuelo_FK", length: 5 })
  idVueloFk!: string;

  @Column("varchar", { name: "id_tarjeta_FK", nullable: true, length: 5 })
  idTarjetaFk!: string | null;
}
