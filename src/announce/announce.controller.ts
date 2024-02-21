import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AnnounceService } from './announce.service';
import { AnnounceEntity } from './entities/announce.entity';
import { CreateAnnounce } from './interface/create-announce';

@Controller('announce')
export class AnnounceController {
  constructor(private announceService: AnnounceService) {}
  @Post()
  createAnnounce(@Body() body: CreateAnnounce): Promise<AnnounceEntity> {
    return this.announceService.createAnnounce(body);
  }

  @Get('search')
  searchAnnounce(
    @Query('levelName') levelName: string,
    @Query('subjectName') subjectName: string,
  ): Promise<AnnounceEntity> {
    return this.announceService.searchAnnounce({ levelName, subjectName });
  }
}
