import { Controller } from '@nestjs/common';
import { LevelService } from './level.service';

@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}
  // @Get('subject/:name')
  // findLevelAndSubjectByName(
  //   @Param('name') name: string,
  // ): Promise<LevelSubjectInterface> {
  //   return this.levelService.findLevelAndSubjectByName(name);
  // }
}
