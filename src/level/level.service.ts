import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { BddService } from 'src/bdd/bdd.service';
import { SubjectService } from 'src/subject/subject.service';
import { LevelInterface, LevelSubjectInterface } from './level';

@Injectable()
export class LevelService {
  constructor(
    @Inject(forwardRef(() => SubjectService))
    private readonly subjectService: SubjectService,
    private bdd: BddService,
  ) {}

  findAll(): LevelInterface[] {
    return this.bdd.get<LevelInterface>('levels');
  }

  findLevelAndSubjectByName(name: string): LevelSubjectInterface[] {
    const level = this.findAll().find((l) => l.name === name);
    const subjects = this.subjectService.findAll();
    const filteredSubject = subjects.filter((s) => s.levelId === level.id);
    return filteredSubject.map<LevelSubjectInterface>((subject) => ({
      subject,
      level,
    }));
  }
}
