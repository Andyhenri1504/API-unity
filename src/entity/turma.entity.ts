import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Professor } from './professor.entity';

@Entity('TURMA')
export class Turma {
  @PrimaryGeneratedColumn()
  ID_Turma: number;

  @Column()
  Nome_Escola: string;

  @Column({ length: 10 })
  Ano_Turma: string;

  @ManyToOne(() => Professor, (professor) => professor.ID_Professor, { nullable: true, onDelete: 'SET NULL' })
  ID_Professor: Professor; // Relacionamento com Professor
}
