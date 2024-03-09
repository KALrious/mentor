import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelModule } from '../level/level.module';
import { SubjectModule } from '../subject/subject.module';
import { AnnounceController } from './announce.controller';
import { AnnounceService } from './announce.service';
import { AnnounceEntity } from './entities/announce.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnnounceEntity]),
    LevelModule,
    SubjectModule,
  ],
  providers: [AnnounceService],
  controllers: [AnnounceController],
})
export class AnnounceModule {}
