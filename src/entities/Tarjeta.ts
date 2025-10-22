import { Column, Entity, Index } from "typeorm";

@Index("numero_tarjeta", ["numeroTarjeta"], { unique: true })
@Index("fk_tarjeta_pagador", ["idPagadorFk"], {})
@Entity("tarjeta", { schema: "senasoft" })
export class Tarjeta {
  @Column("varchar", { primary: true, name: "id_tarjeta", length: 5 })
  idTarjeta!: string;

  @Column("varchar", { name: "tipo_tarjeta", length: 50 })
  tipoTarjeta!: string;

  @Column("varchar", { name: "numero_tarjeta", unique: true, length: 100 })
  numeroTarjeta!: string;

  @Column("varchar", { name: "id_pagador_FK", length: 5 })
  idPagadorFk!: string;

  @Column("varchar", { name: "codigo_cvv", length: 50 })
  codigoCvv!: string;

  @Column("date", { name: "fecha_vencimiento" })
  fechaVencimiento!: string;

  @Column("varchar", { name: "valor_tarjeta", length: 191 })
  valorTarjeta!: string;
}
