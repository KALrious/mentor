import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
}
