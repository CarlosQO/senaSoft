import { Column, Entity } from "typeorm";

@Entity("vuelo", { schema: "senasoft" })
export class Vuelo {
  @Column("varchar", { primary: true, name: "id_vuelo", length: 5 })
  idVuelo!: string;

  @Column("varchar", { name: "precio_total", length: 100 })
  precioTotal!: string;
}
