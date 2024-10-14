import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Aluno } from "./aluno.entity";
import { Fase } from "./fase.entity";

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  ID_Logs: number;

  @Column()
  Date_Time: Date;

  @Column({ nullable: true })
  Fases_Completadas: number;

  @Column({ nullable: true })
  Mundos_Completadas: number;

  @Column()
  Uso_Dicas: boolean;

  @Column()
  Uso_Backtracking: boolean;

  @ManyToOne(() => Aluno, (aluno) => aluno.ID_Aluno, { onDelete: 'CASCADE' })
  ID_Aluno: Aluno;

  @ManyToOne(() => Fase, (fase) => fase.ID_Fase, { onDelete: 'RESTRICT' })
  ID_Fase: Fase;
}