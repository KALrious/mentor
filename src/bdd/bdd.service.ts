import { Injectable } from '@nestjs/common';
import bdd from './bdd';

@Injectable()
export class BddService {
  get<Entity>(key: string): Entity[] {
    return bdd[key];
  }
  getById<Entity>(key: string, id: number): Entity {
    return bdd[key].find((entity) => entity.id === id);
  }
}
