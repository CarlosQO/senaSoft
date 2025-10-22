import { Column, Entity, Index } from "typeorm";

@Index("fk_avion_modelo", ["idModeloFk"], {})
@Entity("avion", { schema: "senasoft" })
export class Avion {
  @Column("varchar", { primary: true, name: "id_avion", length: 5 })
  idAvion!: string;

  @Column("varchar", { name: "id_modelo_FK", length: 5 })
  idModeloFk!: string;

  @Column("varchar", { name: "origen", length: 191 })
  origen!: string;

  @Column("varchar", { name: "destino", length: 191 })
  destino!: string;

  @Column("varchar", { name: "estado", length: 191 })
  estado!: string;

  @Column("varchar", { name: "precio_vuelo", length: 50 })
  precioVuelo!: string;
}
