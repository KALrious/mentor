import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/guards/role.decorator';
import { Role } from 'src/user/interface/role';
import { CourseService } from './course.service';
import { CourseEntity } from './entities/course.entity';
import { CreateCourseDto } from './interface/create-course.dto';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}
  @Post()
  @UseGuards(AuthGuard)
  @Roles(Role.Student)
  createCourse(
    @Body() body: CreateCourseDto,
    @Req() { user },
  ): Promise<CourseEntity> {
    return this.courseService.createCourse({ ...body, userId: user.sub });
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @Roles(Role.Student)
  updateCourse(@Param('id', ParseIntPipe) id: number): Promise<CourseEntity> {
    return this.courseService.updateCourse({ courseId: id });
  }

  @Get()
  @UseGuards(AuthGuard)
  @Roles(Role.Student, Role.Teacher)
  findMyCourses(@Req() { user }): Promise<CourseEntity[]> {
    return this.courseService.findCourses(user.sub);
  }
}
