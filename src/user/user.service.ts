import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './interface/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  createUser({
    firstName,
    lastName,
    email,
  }: CreateUserDto): Promise<UserEntity> {
    return this.userRepository.save({
      firstName,
      lastName,
      email,
    });
  }
}
