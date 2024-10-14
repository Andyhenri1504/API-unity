import { Module } from '@nestjs/common';
import { FaseService } from './fase.service';
import { FaseController } from './fase.controller';

@Module({
  providers: [FaseService],
  controllers: [FaseController]
})
export class FaseModule {}
