import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectModule } from './subject/subject.module';
import { LevelModule } from './level/level.module';

@Module({
  imports: [SubjectModule, LevelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
