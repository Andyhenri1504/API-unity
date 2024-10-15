import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fase } from 'src/entity/fase.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FaseService {
    constructor(
        @InjectRepository(Fase)
        private faseRepository: Repository<Fase>,
      ) {}
    
      
      async findAll(): Promise<Fase[]> {
        return this.faseRepository.find();
      }
    
      
      async findOne(id: number): Promise<Fase> {
        return this.faseRepository.findOneBy({ ID_Fase: id });
      }
    
      
      async create(fase: Fase): Promise<Fase> {
        return this.faseRepository.save(fase);
      }
    
      
      async update(id: number, fase: Fase): Promise<void> {
        await this.faseRepository.update(id, fase);
      }
    
      
      async remove(id: number): Promise<void> {
        await this.faseRepository.delete(id);
      }
}
