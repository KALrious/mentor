import { Module, forwardRef } from '@nestjs/common';
import { LevelModule } from 'src/level/level.module';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';

@Module({
  exports: [SubjectService],
  controllers: [SubjectController],
  providers: [SubjectService],
  imports: [forwardRef(() => LevelModule)],
})
export class SubjectModule {}
