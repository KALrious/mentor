import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { LevelEntity } from './level/entities/level.entity';
import { SubjectEntity } from './subject/entities/subject.entity';

const options: DataSourceOptions = {
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'mentor',
  migrations: ['./migrations/*{.ts,.js}'],
  entities: [SubjectEntity, LevelEntity],
};

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  ...options,
  synchronize: true,
};

export const connectionSource = new DataSource(options);
