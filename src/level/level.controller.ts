import { Body, Controller, Post } from '@nestjs/common';
import { LevelEntity } from './entities/level.entity';
import { AddLevelDto } from './interface/add-level.dto';
import { LevelService } from './level.service';

@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}
  @Post()
  addLevel(@Body() level: AddLevelDto): Promise<LevelEntity> {
    return this.levelService.createNewLevel(level);
  }
}
