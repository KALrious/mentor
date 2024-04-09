import { AnnounceEntity } from 'src/announce/entities/announce.entity';
import { CourseEntity } from 'src/course/entities/course.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../interface/role';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  passwordHash: string;

  @Column({
    enum: Role,
    default: Role.Admin,
  })
  role: Role;

  @OneToMany(() => CourseEntity, (course) => course.student)
  @JoinColumn()
  courses: CourseEntity[];

  @OneToMany(() => AnnounceEntity, (announce) => announce.teacher)
  @JoinColumn()
  announces: AnnounceEntity[];
}
