import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Professor } from 'src/entity/professor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfessorService {
    constructor(
        @InjectRepository(Professor)
        private professorRepository: Repository<Professor>,
    ){}

    async findAll(): Promise<Professor[]>{
        return this.professorRepository.find();
    }

    async findOne(id: number): Promise<Professor>{
        return this.professorRepository.findOneBy({ID_Professor: id});
    } 

    async create(professor: Professor): Promise<Professor>{
        return this.professorRepository.save(professor);
    }

    async update(id: number, professor: Professor): Promise<void>{
        await this.professorRepository.update(id, professor);
    }

    async remove(id: number): Promise<void>{
        await this.professorRepository.delete(id);
    }
}
