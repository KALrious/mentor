import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LevelService } from 'src/level/level.service';
import { SubjectService } from 'src/subject/subject.service';
import { Repository } from 'typeorm';
import { AnnounceEntity } from './entities/announce.entity';
import { CreateAnnounce } from './interface/create-announce';

@Injectable()
export class AnnounceService {
  constructor(
    @InjectRepository(AnnounceEntity)
    private announceRepository: Repository<AnnounceEntity>,
    private subjectService: SubjectService,
    private levelService: LevelService,
  ) {}

  async createAnnounce({
    price,
    level: { name: levelName },
    subject: { name: subjectName },
  }: CreateAnnounce): Promise<AnnounceEntity> {
    if (!levelName || !subjectName || !price) {
      throw new HttpException(
        'bad request subject or level or price not found',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (price < 0) {
      throw new HttpException(
        'bad request price too low',
        HttpStatus.BAD_REQUEST,
      );
    }
    const level = await this.levelService.findOneByName(levelName);
    const subject = await this.subjectService.findOneByName(subjectName);
    const announce = await this.announceRepository.save({
      price,
      level,
      subject,
    });
    return announce;
  }

  async searchAnnounce({
    levelName,
    subjectName,
  }: {
    levelName: string;
    subjectName: string;
  }): Promise<AnnounceEntity> {
    const level = await this.levelService.findOneByName(levelName);
    const subject = await this.subjectService.findOneByName(subjectName);
    const announce = await this.announceRepository.findOneBy({
      level,
      subject,
    });
    if (!announce) {
      throw new HttpException(
        `no announce linked to subject: ${subjectName} and level: ${levelName}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return announce;
  }
}
