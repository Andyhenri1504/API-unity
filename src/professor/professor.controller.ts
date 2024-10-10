import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { Professor } from 'src/entity/professor.entity';

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService){}

  @Get()
  findAll(): Promise<Professor[]>{
    return this.professorService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Professor>{
    return this.professorService.findOne(id);
}
  @Post()
    create(@Body() professor: Professor): Promise<Professor> {
        return this.professorService.create(professor);
    }
  @Post(':id')
    update(@Param('id') id: number, @Body() professor: Professor): Promise<void>{
        return this.professorService.update(id, professor);
    }
   @Delete(':id')
     remove(@Param('id') id: number): Promise<void>{
        return this.professorService.remove(id);
     }   
}
