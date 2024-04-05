import { Body, Controller, Post } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './interface/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  signupUser(@Body() body: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(body);
  }
}
