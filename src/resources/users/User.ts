import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Task } from '../tasks/Task';

@Entity({ name: 'user' })
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string = 'USER';

  @Column('varchar')
  login: string = 'user';

  @Column('varchar')
  password: string = 'P@55w0rd';

  @OneToMany(() => Task, task => task.userId, {
    eager: true,
    cascade: true,
  })
  tasks?: Task[];
}

export { User };
