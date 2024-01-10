import { Module, forwardRef } from '@nestjs/common';
import { SubjectModule } from 'src/subject/subject.module';
import { LevelController } from './level.controller';
import { LevelService } from './level.service';

@Module({
  imports: [forwardRef(() => SubjectModule)],
  controllers: [LevelController],
  providers: [LevelService],
  exports: [LevelService],
})
export class LevelModule {}
