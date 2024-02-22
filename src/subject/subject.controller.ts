import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { SubjectEntity } from './entities/subject.entity';
import { InterfacePostSubject } from './subject';
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
  findOneById(@Param('id', ParseIntPipe) id: number): Promise<SubjectEntity> {
    return this.subjectService.findOneById(id);
  }

  @Post()
  addSubject(@Body() subject: InterfacePostSubject): Promise<SubjectEntity> {
    return this.subjectService.createNewSubject(subject);
  }
}
