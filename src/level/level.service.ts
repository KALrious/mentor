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

  findOneByName(name: string): Promise<LevelEntity> {
    return this.levelRepository.findOneBy({
      name,
    });
  }

  async createNewLevel(level: { name: string }): Promise<LevelEntity> {
    return this.levelRepository.save({
      name: level.name,
    });
  }
}
