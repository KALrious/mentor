import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BddModule } from './bdd/bdd.module';
import { LevelModule } from './level/level.module';
import { SubjectModule } from './subject/subject.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [SubjectModule, LevelModule, BddModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
