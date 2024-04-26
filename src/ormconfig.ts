import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { AnnounceEntity } from './announce/entities/announce.entity';
import { CourseEntity } from './course/entities/course.entity';
import { LevelEntity } from './level/entities/level.entity';
import { SubjectEntity } from './subject/entities/subject.entity';
import { UserEntity } from './user/entities/user.entity';

const { env } = process;

console.log(env);

const options: DataSourceOptions = {
  //@ts-ignore
  type: 'mariadb',
  host: env.DB_HOST,
  port: parseInt(env.DB_PORT),
  username: env.DB_USERNAME,
  password: env.DB_PASS,
  database: env.DB_NAME,
  migrationsRun: true,
  migrations: ['./dist/migration/*.js'],
  entities: [
    SubjectEntity,
    LevelEntity,
    AnnounceEntity,
    UserEntity,
    CourseEntity,
  ],
};

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  ...options,
  synchronize: false,
};

export const connectionSource = new DataSource(options);
