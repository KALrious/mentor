import { Injectable } from '@nestjs/common';
import { BddService } from 'src/bdd/bdd.service';
import { InterfacePostSubject, InterfaceSubject } from './subject';

@Injectable()
export class SubjectService {
  constructor(private bdd: BddService) {}
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
}
