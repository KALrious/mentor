import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/guards/role.decorator';
import { Role } from 'src/user/interface/role';
import { CourseService } from './course.service';
import { CourseEntity } from './entities/course.entity';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get()
  @UseGuards(AuthGuard)
  @Roles(Role.Student, Role.Teacher)
  findMyCourses(@Req() { user }): Promise<CourseEntity[]> {
    return this.courseService.findCourses(user.sub);
  }
}
