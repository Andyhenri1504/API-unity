import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Aluno } from 'src/entity/aluno.entity';
import { AlunoService } from './aluno.service';

@Controller('aluno')
export class AlunoController {
    constructor(private readonly alunoService: AlunoService) {}

  @Get()
  findAll(): Promise<Aluno[]> {
    return this.alunoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Aluno> {
    return this.alunoService.findOne(id);
  }

  @Post()
  create(@Body() aluno: Aluno): Promise<Aluno> {
    return this.alunoService.create(aluno);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() aluno: Aluno): Promise<void> {
    return this.alunoService.update(id, aluno);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.alunoService.remove(id);
  }
}
