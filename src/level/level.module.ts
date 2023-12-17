import { Module } from '@nestjs/common';
import { SubjectModule } from 'src/subject/subject.module';
import { LevelController } from './level.controller';
import { LevelService } from './level.service';

@Module({
  imports: [SubjectModule],
  controllers: [LevelController],
  providers: [LevelService],
})
export class LevelModule {}
