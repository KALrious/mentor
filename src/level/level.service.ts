import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LevelEntity } from './entities/level.entity';

@Injectable()
export class LevelService {
  constructor(
    @InjectRepository(LevelEntity)
    private levelRepository: Repository<LevelEntity>,
  ) {}

  findAll(): Promise<LevelEntity[]> {
    return this.levelRepository.find();
  }

  // async findLevelAndSubjectByName(
  //   name: string,
  // ): Promise<LevelSubjectInterface> {
  //   const level = await this.levelRepository.findOneBy({ name });
  //   return {
  //     subject: {
  //       id: level.subject.id,
  //       name: level.subject.name,
  //     },
  //     level: {
  //       id: level.id,
  //       name: level.name,
  //     },
  //   };
  // }
}
