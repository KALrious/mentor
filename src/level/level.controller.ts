import { Controller, Get, Param } from '@nestjs/common';
import { LevelSubjectInterface } from './level';
import { LevelService } from './level.service';

@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}
  @Get('subject/:name')
  findLevelAndSubjectByName(
    @Param('name') name: string,
  ): LevelSubjectInterface[] {
    return this.levelService.findLevelAndSubjectByName(name);
  }
}
