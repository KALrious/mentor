import { Body, Controller, Get, Post } from '@nestjs/common';
import { SUBJECTS } from './bdd';
import { InterfaceSubject } from './subject';

@Controller('subject')
export class SubjectController {
  @Get()
  findAll(): InterfaceSubject[] {
    return SUBJECTS;
  }

  @Post()
  addSubject(@Body() subject: InterfaceSubject): InterfaceSubject[] {
    return [...SUBJECTS, subject];
  }
}
