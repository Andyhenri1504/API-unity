import { Module } from '@nestjs/common';
import { ProfessorModule } from './professor/professor.module';
import { TurmaModule } from './turma/turma.module';
import { AlunoModule } from './aluno/aluno.module';
import { FaseModule } from './fase/fase.module';

@Module({
  imports: [ProfessorModule, TurmaModule, AlunoModule, FaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
