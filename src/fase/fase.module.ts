import { Module } from '@nestjs/common';
import { FaseService } from './fase.service';
import { FaseController } from './fase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fase } from 'src/entity/fase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fase])],
  providers: [FaseService],
  controllers: [FaseController]
})
export class FaseModule {}
