import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { BddService } from 'src/bdd/bdd.service';
import { LevelSubjectInterface } from 'src/level/level';
import { LevelService } from 'src/level/level.service';
import { InterfacePostSubject, InterfaceSubject } from './subject';

@Injectable()
export class SubjectService {
  constructor(
    private bdd: BddService,
    @Inject(forwardRef(() => LevelService))
    private levelService: LevelService,
  ) {}
  findAll(): InterfaceSubject[] {
    return this.bdd.get<InterfaceSubject>('subjects');
  }

  findOneById(id: number): InterfaceSubject {
    return this.bdd.getById<InterfaceSubject>('subjects', id);
  }

  createNewSubject({ name }: InterfacePostSubject): InterfaceSubject[] {
    const sortedByIdSubject = this.findAll().sort((a, b) => a.id - b.id);
    const newId = sortedByIdSubject[sortedByIdSubject.length - 1].id + 1;
    return [...this.findAll(), { id: newId, name, levelId: 1 }];
  }

  levelAndSubjectFromName(name: string): LevelSubjectInterface[] {
    const subject = this.findAll().find((s) => s.name === name);
    const levels = this.levelService.findAll();
    const filteredLevel = levels.filter((l) => l.id === subject.levelId);
    return filteredLevel.map((level) => ({
      level,
      subject,
    }));
  }
}
