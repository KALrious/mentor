import { SubjectEntity } from 'src/subject/entities/subject.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LevelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => SubjectEntity, (subject) => subject.level)
  subject: SubjectEntity;
}
