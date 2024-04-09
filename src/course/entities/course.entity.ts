import { AnnounceEntity } from 'src/announce/entities/announce.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.courses)
  @JoinColumn()
  student: UserEntity;

  @ManyToOne(() => AnnounceEntity, (announce) => announce.courses)
  @JoinColumn()
  announce: AnnounceEntity;

  @Column()
  date: Date;

  @Column()
  hours: number;
}
