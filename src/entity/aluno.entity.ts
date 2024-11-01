import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Turma } from "./turma.entity";

@Entity('ALUNO')
export class Aluno {
  @PrimaryGeneratedColumn()
  ID_Aluno: number;

  @Column({ length: 100 })
  Nome: string;

  @Column({ unique: true, length: 255 })
  Email: string;

//Arrumar esse ManyToOne aqui

  @ManyToOne(() => Turma, (turma) => turma.ID_Turma, { nullable: true, onDelete: 'SET NULL' })
  ID_Turma: Turma; // Relacionamento com Turma
}