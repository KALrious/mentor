import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnnounceService } from 'src/announce/announce.service';
import { MailService } from 'src/mail/mail.service';
import { Role } from 'src/user/interface/role';
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
    private readonly mailService: MailService,
  ) {}
  async findCourses(userId: number): Promise<CourseEntity[]> {
    const user = await this.userService.findOneById(userId);

    if (!user) {
      throw new HttpException(`user not found`, HttpStatus.NOT_FOUND);
    }
    if (user.role === Role.Teacher) {
      const teacherAnnounce = await this.announceService.findAllByUser(user);
      return teacherAnnounce.flatMap(({ courses }) => courses);
    }
    return this.courseRepository.findBy({
      student: user,
    });
  }

  async createCourses(
    announceId: number,
    hours: number,
    userId: number,
    date: Date,
    transaction_id: string,
  ) {
    const announce = await this.announceService.findOneById(announceId);
    if (!announce) {
      throw new HttpException(`announce not found`, HttpStatus.NOT_FOUND);
    }
    const user = await this.userService.findOneById(userId);
    if (!user && user.role !== Role.Student) {
      throw new HttpException(`user not found`, HttpStatus.NOT_FOUND);
    }
    console.log(announce, user, date, hours);
    const course = this.courseRepository.save({
      announce,
      student: user,
      date,
      hours,
    });

    const totalPrice = announce.price * hours;

    await this.mailService.paymentEmail({
      price: totalPrice,
      subject: announce.subject.name,
      user: user,
      transaction_id,
    });

    await this.mailService.createCourseEmail({
      teacher: announce.teacher,
      student: user,
      hours,
      level: announce.level.name,
      price: totalPrice,
      subject: announce.subject.name,
    });

    return course;
  }
}
