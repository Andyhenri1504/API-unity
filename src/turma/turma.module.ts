import { Module } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { TurmaController } from './turma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turma } from 'src/entity/turma.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Turma])],
  providers: [TurmaService],
  controllers: [TurmaController]
})
export class TurmaModule {}
