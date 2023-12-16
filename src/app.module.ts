import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectController } from './subject/subject.controller';

@Module({
  imports: [],
  controllers: [AppController, SubjectController],
  providers: [AppService],
})
export class AppModule {}
