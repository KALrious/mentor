import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectEntity } from './entities/subject.entity';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';

@Module({
  exports: [SubjectService],
  controllers: [SubjectController],
  providers: [SubjectService],
  imports: [TypeOrmModule.forFeature([SubjectEntity]), CacheModule.register()],
})
export class SubjectModule {}
