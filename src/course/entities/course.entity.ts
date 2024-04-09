import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AnnounceEntity } from '../../announce/entities/announce.entity';
import { UserEntity } from '../../user/entities/user.entity';

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
