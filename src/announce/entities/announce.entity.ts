import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CourseEntity } from '../../course/entities/course.entity';
import { LevelEntity } from '../../level/entities/level.entity';
import { SubjectEntity } from '../../subject/entities/subject.entity';
import { UserEntity } from '../../user/entities/user.entity';

@Entity()
export class AnnounceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @ManyToOne(() => SubjectEntity, (subject) => subject.announces)
  @JoinColumn()
  subject: SubjectEntity;

  @ManyToOne(() => LevelEntity, (level) => level.announces)
  @JoinColumn()
  level: LevelEntity;

  @OneToMany(() => CourseEntity, (course) => course.announce)
  @JoinColumn()
  courses: CourseEntity[];

  @ManyToOne(() => UserEntity, (user) => user.announces)
  @JoinColumn()
  teacher: UserEntity;
}
