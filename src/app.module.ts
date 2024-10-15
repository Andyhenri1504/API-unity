import { Module } from '@nestjs/common';
import { ProfessorModule } from './professor/professor.module';
import { TurmaModule } from './turma/turma.module';
import { AlunoModule } from './aluno/aluno.module';
import { FaseModule } from './fase/fase.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professor } from './entity/professor.entity';
import { Turma } from './entity/turma.entity';
import { Aluno } from './entity/aluno.entity';
import { Fase } from './entity/fase.entity';
import { Log } from './entity/log.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'school_game_logs',
      entities: [Professor, Turma, Aluno, Fase, Log],
      synchronize: false,
    }),
    ProfessorModule, 
    TurmaModule, 
    AlunoModule, 
    FaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
