import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Log } from 'src/entity/log.entity';
import { LogService } from './log.service';

@Controller('log')
export class LogController {
    constructor(private readonly logService: LogService) {}

  
  @Get()
  findAll(): Promise<Log[]> {
    return this.logService.findAll();
  }

  
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Log> {
    return this.logService.findOne(id);
  }

  
  @Post()
  create(@Body() log: Log): Promise<Log> {
    return this.logService.create(log);
  }

  
  @Put(':id')
  update(@Param('id') id: number, @Body() log: Log): Promise<void> {
    return this.logService.update(id, log);
  }

 
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.logService.remove(id);
  }
}
