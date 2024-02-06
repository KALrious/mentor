import { LevelEntity } from 'src/level/entities/level.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SubjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => LevelEntity, (level) => level.subject)
  level?: LevelEntity;
}
