import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Turma } from 'src/entity/turma.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TurmaService {
    constructor(
        @InjectRepository(Turma)
        private turmaRepository: Repository<Turma>,
      ) {}
    
      async findAll(): Promise<Turma[]> {
        return this.turmaRepository.find({ relations: ['ID_Professor'] });
      }
    
      async findOne(id: number): Promise<Turma> {
        return this.turmaRepository.findOne({ where: { ID_Turma: id }, relations: ['ID_Professor'] });
      }
    
      async create(turma: Turma): Promise<Turma> {
        return this.turmaRepository.save(turma);
      }
    
      async update(id: number, turma: Turma): Promise<void> {
        await this.turmaRepository.update(id, turma);
      }
    
      async remove(id: number): Promise<void> {
        await this.turmaRepository.delete(id);
      }

}
