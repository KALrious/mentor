import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnnounceService } from 'src/announce/announce.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CourseEntity } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(
    private userService: UserService,
    private announceService: AnnounceService,
    @InjectRepository(CourseEntity)
    private courseRepository: Repository<CourseEntity>,
  ) {}
  async createCourse({
    announceId,
    userId,
    date,
    hours,
  }: {
    announceId: number;
    userId: number;
    date: Date;
    hours: number;
  }): Promise<CourseEntity> {
    const user = await this.userService.findOneById(userId);

    if (!user) {
      throw new HttpException(`user not found`, HttpStatus.NOT_FOUND);
    }

    const announce = await this.announceService.findOneById(announceId);

    if (!announce) {
      throw new HttpException(`announce not found`, HttpStatus.NOT_FOUND);
    }

    const course = this.courseRepository.save({
      announce,
      student: user,
      date,
      hours,
    });

    return course;
  }
}
