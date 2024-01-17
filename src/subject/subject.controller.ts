import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LevelSubjectInterface } from 'src/level/level';
import { SUBJECTS } from './bdd';
import { InterfacePostSubject, InterfaceSubject } from './subject';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}
  @Get()
  findAll(): InterfaceSubject[] {
    return SUBJECTS;
  }

  @Get('favorite')
  findFavorite(): string {
    return this.subjectService.findFavorite();
  }

  @Get(':id')
  findOneById(@Param('id') id: string): InterfaceSubject {
    return this.subjectService.findOneById(+id);
  }

  @Get(':name/level')
  findLevelAndSubject(@Param('name') name: string): LevelSubjectInterface[] {
    return this.subjectService.levelAndSubjectFromName(name);
  }

  @Post()
  addSubject(@Body() subject: InterfacePostSubject): InterfaceSubject[] {
    return this.subjectService.createNewSubject(subject);
  }
}
