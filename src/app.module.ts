import { Module } from '@nestjs/common';
import { ProfessorModule } from './professor/professor.module';
import { TurmaModule } from './turma/turma.module';

@Module({
  imports: [ProfessorModule, TurmaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
