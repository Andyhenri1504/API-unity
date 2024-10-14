import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from 'src/entity/aluno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlunoService {
    constructor(
        @InjectRepository(Aluno)
        private alunoRepository: Repository<Aluno>,
      ) {}
    
      async findAll(): Promise<Aluno[]> {
        return this.alunoRepository.find({ relations: ['ID_Turma'] });
      }
    
      async findOne(id: number): Promise<Aluno> {
        return this.alunoRepository.findOne({ where: { ID_Aluno: id }, relations: ['ID_Turma'] });
      }
    
      async create(aluno: Aluno): Promise<Aluno> {
        return this.alunoRepository.save(aluno);
      }
    
      async update(id: number, aluno: Aluno): Promise<void> {
        await this.alunoRepository.update(id, aluno);
      }
    
      async remove(id: number): Promise<void> {
        await this.alunoRepository.delete(id);
      }
}
