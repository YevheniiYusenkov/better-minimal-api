import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'user',
    nullable: false,
  })
  username: string;

  @Column({
    name: 'password',
    nullable: false,
    select: false,
  })
  password: string;

  @Column({
    name: 'email',
    nullable: true,
    unique: true,
  })
  email: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;
}
