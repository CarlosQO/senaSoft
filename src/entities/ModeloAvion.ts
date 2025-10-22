import { Column, Entity } from "typeorm";

@Entity("modelo_avion", { schema: "senasoft" })
export class ModeloAvion {
  @Column("varchar", { primary: true, name: "id_modelo", length: 5 })
  idModelo!: string;

  @Column("varchar", { name: "modelo", length: 191 })
  modelo!: string;

  @Column("varchar", { name: "capacidad_pasajeros", length: 50 })
  capacidadPasajeros!: string;
}
