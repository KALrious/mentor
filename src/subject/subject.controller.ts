import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { SubjectEntity } from './entities/subject.entity';
import { AddSubjectDto } from './interface/add-subject.dto';
import { FindOneParams } from './interface/find-one-params';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}
  @Get()
  findAll(): Promise<SubjectEntity[]> {
    return this.subjectService.findAll();
  }

  @Get('favorite')
  findFavorite(): string {
    return this.subjectService.findFavorite();
  }

  @Get(':id')
  findOneById(
    @Param('id', ParseIntPipe) { id }: FindOneParams,
  ): Promise<SubjectEntity> {
    return this.subjectService.findOneById(id);
  }

  @Post()
  addSubject(@Body() subject: AddSubjectDto): Promise<SubjectEntity> {
    return this.subjectService.createNewSubject(subject);
  }
}
