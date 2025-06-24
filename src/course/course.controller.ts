import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/guards/role.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { Role } from 'src/user/interface/role';
import { CourseService } from './course.service';
import { CourseEntity } from './entities/course.entity';
import { CreateCourseDto } from './interface/create-course.dto';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) { }
  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Student)
  createCourse(
    @Body() body: CreateCourseDto,
    @Req() { user },
  ): Promise<CourseEntity> {
    return this.courseService.createCourse({ ...body, userId: user.sub });
  }
}
