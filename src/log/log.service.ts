import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from 'src/entity/log.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LogService {
    constructor(
        @InjectRepository(Log)
        private logRepository: Repository<Log>,
      ) {}
    
      
      async findAll(): Promise<Log[]> {
        return this.logRepository.find({ relations: ['ID_Aluno', 'ID_Fase'] });
      }
    
      
      async findOne(id: number): Promise<Log> {
        return this.logRepository.findOne({ where: { ID_Logs: id }, relations: ['ID_Aluno', 'ID_Fase'] });
      }
    
      
      async create(log: Log): Promise<Log> {
        return this.logRepository.save(log);
      }
    

      async update(id: number, log: Log): Promise<void> {
        await this.logRepository.update(id, log);
      }
    
      
      async remove(id: number): Promise<void> {
        await this.logRepository.delete(id);
      }
}
