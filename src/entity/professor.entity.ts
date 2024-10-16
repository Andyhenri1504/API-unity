import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('PROFESSOR')
export class Professor{
@PrimaryGeneratedColumn()
ID_Professor: number;

@Column({ length: 100 })
Nome: string;

@Column({ unique: true, length: 225})
Email: string;

@Column()
Senha: string;
}