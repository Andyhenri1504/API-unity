import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Fase } from 'src/entity/fase.entity';
import { FaseService } from './fase.service';

@Controller('fase')
export class FaseController {
    constructor(private readonly faseService: FaseService) {}

  
  @Get()
  findAll(): Promise<Fase[]> {
    return this.faseService.findAll();
  }

  
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Fase> {
    return this.faseService.findOne(id);
  }

  
  @Post()
  create(@Body() fase: Fase): Promise<Fase> {
    return this.faseService.create(fase);
  }

  
  @Put(':id')
  update(@Param('id') id: number, @Body() fase: Fase): Promise<void> {
    return this.faseService.update(id, fase);
  }

  
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.faseService.remove(id);
  }
}
