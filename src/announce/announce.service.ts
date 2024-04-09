import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LevelService } from '../level/level.service';
import { SubjectService } from '../subject/subject.service';
import { UserService } from '../user/user.service';
import { AnnounceEntity } from './entities/announce.entity';
import { CreateAnnounceDto } from './interface/create-announce.dto';

@Injectable()
export class AnnounceService {
  constructor(
    @InjectRepository(AnnounceEntity)
    private announceRepository: Repository<AnnounceEntity>,
    private subjectService: SubjectService,
    private levelService: LevelService,
    private userService: UserService,
  ) {}

  async findOneById(id: number) {
    return this.announceRepository.findOneBy({ id });
  }

  async createAnnounce({
    price,
    level: { name: levelName },
    subject: { name: subjectName },
    userId,
  }: CreateAnnounceDto & { userId: number }): Promise<AnnounceEntity> {
    const user = await this.userService.findOneById(userId);

    if (!user) {
      throw new HttpException(`user not found`, HttpStatus.NOT_FOUND);
    }
    const level = await this.levelService.findOneByName(levelName);
    if (!level) {
      throw new HttpException(`level not found`, HttpStatus.NOT_FOUND);
    }
    const subject = await this.subjectService.findOneByName(subjectName);
    if (!subject) {
      throw new HttpException(`subject not found`, HttpStatus.NOT_FOUND);
    }
    const announce = await this.announceRepository.save({
      price,
      level,
      subject,
      teacher: user,
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
