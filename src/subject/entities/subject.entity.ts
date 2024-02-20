import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AnnounceEntity } from '../../announce/entities/announce.entity';

@Entity()
export class SubjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => AnnounceEntity, (announce) => announce.subject)
  @JoinColumn()
  announces: AnnounceEntity[];
}
