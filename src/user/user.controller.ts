import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/guards/role.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './interface/create-user.dto';
import { Role } from './interface/role';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  signupUser(@Body() body: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(body);
  }

  @Get('me')
  @Roles(Role.Student)
  @UseGuards(AuthGuard, RolesGuard)
  userInfo(@Req() { user }): Promise<UserEntity> {
    return this.userService.findOne(user.username);
  }
}
