import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelEntity } from './entities/level.entity';
import { LevelController } from './level.controller';
import { LevelService } from './level.service';

@Module({
  imports: [TypeOrmModule.forFeature([LevelEntity])],
  controllers: [LevelController],
  providers: [LevelService],
  exports: [LevelService],
})
export class LevelModule {}
