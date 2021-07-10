import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Task } from '../../tasks/entities/task.entity';

@Entity({ name: 'user' })
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  login: string;

  @Column('varchar')
  password: string;

  @OneToMany(() => Task, (task) => task.userId, {
    eager: true,
    cascade: true,
  })
  tasks?: Task[];
}

export { User };
