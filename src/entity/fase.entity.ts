import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Fase {
  @PrimaryGeneratedColumn()
  ID_Fase: number;

  @Column()
  Numero_Fase: number;

  @Column()
  Numero_Mundo: number;
}